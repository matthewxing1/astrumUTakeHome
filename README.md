# Task 

There is a JSON file that has a list of universities. Imagine that this is a regular database. Please, implement an API using Nest JS (feel free to use Nest CLI - https://docs.nestjs.com) and GraphQL so it can expose the following queries:

- GET a list of universities

- GET university by id

Also, there should be the following mutations:

- CREATE university (only for authorized users)

- UPDATE university (only for authorized users)

Please note that each of the universities has a `city` and `city` has a `state.` So there might be some complexity.

# Notes
- Used Node/fs to read from the json file, if using a real database would need to connect to it
- Created a "credentials" object in the json file
- Used MD5 source code to manually hash the password "secretpassword", with the value "admin" in the "credentials" of the json file
- To add more authorized users, would probably create a new service first checking credentials, then adding in a new user/password with same MD5 hashing function
- MD5 used, because I definitely did not create it: http://www.webtoolkit.info/javascript-md5.html
- I want to create a delete service (since manually editing the json file is not fun), some time complexity issues if keeping ids in a sequential order (like using the shift() method)
- I believe using a hashing algorithm to create universities from scratch and not caring about the ordering of the universities would be most efficient
- Basically would need to rethink how universities should be added, and if they need to be ordered and whether that affects functionalities in any negative/positive fashion in the future