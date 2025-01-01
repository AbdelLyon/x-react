// useInfiniteList.test.tsx
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import type { FetchFunctionReturn } from "../hooks/useInfiniteList";
import { useInfiniteList } from "../hooks/useInfiniteList";

// Mock data
interface TestItem {
  id: number;
  name: string;
}

const mockData: TestItem[] = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
  { id: 4, name: "Item 4" },
  { id: 5, name: "Item 5" },
];

// Mock fetch function
const createMockFetch = (delay = 0) => {
  return async (
    offset: number,
    limit: number,
  ): Promise<FetchFunctionReturn<TestItem>> => {
    await new Promise((resolve) => setTimeout(resolve, delay));

    const items = mockData.slice(offset, offset + limit);
    const hasMore = offset + limit < mockData.length;

    return { items, hasMore };
  };
};

describe("useInfiniteList", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should initialize with empty state", async () => {
    const { result, unmount } = renderHook(() =>
      useInfiniteList({
        fetchFunction: createMockFetch(),
        limit: 2,
      }),
    );

    expect(result.current.items).toEqual([]);
    expect(result.current.hasMore).toBe(true);
    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(result.current.isLoading).toBe(false);
    unmount();
  });
  it("should load initial items", async () => {
    const { result } = renderHook(() =>
      useInfiniteList({
        fetchFunction: createMockFetch(),
        limit: 2,
      }),
    );

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(result.current.items).toEqual([
      { id: 1, name: "Item 1" },
      { id: 2, name: "Item 2" },
    ]);
    expect(result.current.hasMore).toBe(true);
    expect(result.current.isLoading).toBe(false);
  });

  it("should load more items when onLoadMore is called", async () => {
    const { result } = renderHook(() =>
      useInfiniteList({
        fetchFunction: createMockFetch(),
        limit: 2,
      }),
    );

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(result.current.items).toHaveLength(2);

    await act(async () => {
      result.current.onLoadMore();
      await vi.runAllTimersAsync();
    });

    expect(result.current.items).toHaveLength(4);
    expect(result.current.hasMore).toBe(true);
  });

  it("should handle fetchDelay correctly", async () => {
    const { result } = renderHook(() =>
      useInfiniteList({
        fetchFunction: createMockFetch(),
        fetchDelay: 1000,
        limit: 2,
      }),
    );

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(result.current.isLoading).toBe(false);

    act(() => {
      result.current.onLoadMore();
    });

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await vi.advanceTimersByTime(1000);
    });

    expect(result.current.isLoading).toBe(false);
  });

  it("should set hasMore to false when all items are loaded", async () => {
    const { result } = renderHook(() =>
      useInfiniteList({
        fetchFunction: createMockFetch(),
        limit: 3,
      }),
    );

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(result.current.hasMore).toBe(true);

    await act(async () => {
      result.current.onLoadMore();
      await vi.runAllTimersAsync();
    });

    expect(result.current.items).toHaveLength(5);
    expect(result.current.hasMore).toBe(false);
  });

  it("should handle fetch errors gracefully", async () => {
    const mockErrorFetch = (): never => {
      throw new Error("Fetch error");
    };

    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    const { result } = renderHook(() =>
      useInfiniteList({
        fetchFunction: mockErrorFetch,
        limit: 2,
      }),
    );

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.items).toEqual([]);
    expect(consoleError).toHaveBeenCalled();

    consoleError.mockRestore();
  });

  it("should maintain existing items when fetch fails", async () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {}); // 👈 Ajouter ceci

    let shouldFail = false;
    const mockFetchWithError = (
      offset: number,
      limit: number,
    ): Promise<FetchFunctionReturn<TestItem>> => {
      if (shouldFail) {
        throw new Error("Fetch error");
      }
      return createMockFetch()(offset, limit);
    };

    const { result } = renderHook(() =>
      useInfiniteList({
        fetchFunction: mockFetchWithError,
        limit: 2,
      }),
    );

    await act(async () => {
      await vi.runAllTimersAsync();
    });

    expect(result.current.items).toHaveLength(2);

    shouldFail = true;

    await act(async () => {
      result.current.onLoadMore();
      await vi.runAllTimersAsync();
    });

    expect(result.current.items).toHaveLength(2);
    expect(result.current.isLoading).toBe(false);

    consoleError.mockRestore(); // 👈 Et restaurer le mock
  });
});
