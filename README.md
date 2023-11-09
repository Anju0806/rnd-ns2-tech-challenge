## Tech Challenge
Tech Challenge to create a GraphQL Server with Node.js and Express.js, and frontend with Sveltejs


## Getting Started

To run Epic Events locally, follow these steps:

1. Clone the Repository: Clone this repository to your local machine using git clone.

2. Install Dependencies: Navigate to the project's root directory and run npm install to install the necessary dependencies.

3. Set Up MongoDB: Ensure you have MongoDB installed and running. Configure the connection in the appropriate files.

4. Start the Backend: To start the server run: node --require ts-node/register/transpile-only index.ts

5. Start the Frontend: Navigate to the client directory and run npm dev to launch the React front end.

6. Explore: Open your browser and visit http://localhost:5173/ to explore the site locally.

## Usage


- User Discovery: Browse through the users details. Use the pagination functionality to narrow down your options.

- User Creation: If you want to create a user, click on the "Create User" option. Fill in the username details, and your user will be  created and saved to database.

- The n+1 problem : The Users query has an n+1 problem because for each user, it also fetches the associated companies in a separate query. This can lead to a large number of database queries, impacting performance. To solve the n+1 problem, GraphQL's batching and data loader techniques are used. 