import { QueryKey, UseMutationOptions } from '@tanstack/react-query';
export type Query<DataResponse, PayloadRequest> = {
    queryKey: QueryKey;
    request: ({ search, }: {
        search: Partial<PayloadRequest>;
    }) => Promise<DataResponse[]>;
    search?: Partial<PayloadRequest>;
    enabled?: boolean;
};
export interface Mutation<DataResponse, PayloadRequest> {
    request: (variables: PayloadRequest) => Promise<DataResponse>;
    options?: UseMutationOptions[];
}
