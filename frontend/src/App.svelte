<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { gql } from "@apollo/client/core";
    import client from "./apollo/apollo";
    import Users from "./lib/Users.svelte";

    export let users: any;
    export let page: number = 1;
    export let pageSize: number = 10;
    let totalOfPage: number = 1;

    const GET_USERS = gql`
        query GetUsers($page: Int, $pageSize: Int) {
            Users(page: $page, pageSize: $pageSize) {
                data {
                    id
                    username
                    companies {
                        id
                        name
                    }
                }
                meta {
                    totalOfPage
                }
            }
        }
    `;

    async function fetchData() {
        try {
            const result = await client.query({
                query: GET_USERS,
                variables: { page, pageSize },
            });
            users = result.data.Users.data;
            totalOfPage = result.data.Users.meta.totalOfPage;

            console.log('Users data:', users);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    onMount(() => {
        fetchData();
    });

    function loadNextPage() {
        if (page < totalOfPage) {
            page += 1;
            fetchData();
        }
    }

    function loadPreviousPage() {
        if (page > 1) {
            page -= 1;
            fetchData();
        }
    }
</script>

<main>
    <h1>Harvest Tech Challenge</h1>
    <Users {users} />
    
   
    <button on:click={loadPreviousPage} disabled={page === 1}>Previous</button>
    <button on:click={loadNextPage} disabled={page === totalOfPage}>Next</button
    >
</main>

<style>
    .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
    }
    .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.svelte:hover {
        filter: drop-shadow(0 0 2em #ff3e00aa);
    }
    .read-the-docs {
        color: #888;
    }
</style>
