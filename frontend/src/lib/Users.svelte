<script lang="ts">
  import { onMount } from 'svelte';
  import { gql } from '@apollo/client/core';
  import client from '../apollo/apollo';



  export let users: any[] = []; // Ensure users is always an array

  const GET_USERS = gql`
    query GetUsers {
      Users {
        data {
          id
          username
          companies {
            id
            name
          }
        }
      }
    }`;
  
  onMount(async () => {
    try {
      const result = await client.query({ query: GET_USERS });
      users = result.data.Users.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  });
</script>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Username</th>
      <th>Companies</th>
    </tr>
  </thead>
  <tbody>
    {#each users as user}
      <tr>
        <td>{user.id}</td>
        <td>{user.username}</td>
        <td>{user.companies.map(c => c.name ).join(", ")}</td>
      </tr>
    {/each}
  </tbody>
</table>
