<!-- CreateUser.svelte -->
<script lang="ts">
    import { onMount, setContext } from "svelte";
    import { gql } from "@apollo/client/core";
    import client from "../apollo/apollo";

    let username = ""; // Input field for username
    let successMessage = "";
    let errorMessage = "";

    const CREATE_USER = gql`
        mutation CreateUser($username: String!) {
            createUser(username: $username) {
                id
                username
            }
        }
    `;

    async function createUser() {
        try {
            const result = await client.mutate({
                mutation: CREATE_USER,
                variables: { username },
            });
           
            successMessage =
                "User created with ID ${result.data.createUser.id}";
            username = "";
        } catch (error) {
            // Handle errors: Show an error message, log the error, etc.
            errorMessage = "Failed to create the user. Please try again.";
            console.error("Error creating user:", error);
        }
    }
</script>

<main>

    <form on:submit|preventDefault={createUser}>
        <h2>Create User</h2>
        <label for="username">Username:</label>
        <input type="text" id="username" bind:value={username} required />
        
        <button type="submit">Create User</button>
    </form>
    {#if successMessage}
        <div class="success-message">{successMessage}</div>
    {/if}
    {#if errorMessage}
        <div class="error-message">{errorMessage}</div>
    {/if}
</main>
