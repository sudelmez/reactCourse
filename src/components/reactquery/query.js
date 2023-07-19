import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';

const queryClient = new QueryClient();

export default function QueryApp() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    );
}

function Example() {
    const { isLoading, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.json()),
    });

    if (isLoading) return <Text>Loading...</Text>;

    if (error) return <Text>An error has occurred: {error.message}</Text>;

    return (
        <SafeAreaView>
            <Text>{data.name}</Text>
            <Text>{data.description}</Text>
            <Text>
                <Text>👀 {data.subscribers_count}</Text>{' '}
                <Text>✨ {data.stargazers_count}</Text>{' '}
                <Text>🍴 {data.forks_count}</Text>
            </Text>
        </SafeAreaView>
    );
}
