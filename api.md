# Shared

Types:

- <code><a href="./src/resources/shared.ts">Order</a></code>

# Pets

Types:

- <code><a href="./src/resources/pets.ts">Category</a></code>
- <code><a href="./src/resources/pets.ts">Pet</a></code>
- <code><a href="./src/resources/pets.ts">PetFindByStatusResponse</a></code>
- <code><a href="./src/resources/pets.ts">PetFindByTagsResponse</a></code>
- <code><a href="./src/resources/pets.ts">PetUploadImageResponse</a></code>

Methods:

- <code title="post /pet">client.pets.<a href="./src/resources/pets.ts">create</a>({ ...params }) -> Pet</code>
- <code title="get /pet/{petId}">client.pets.<a href="./src/resources/pets.ts">retrieve</a>(petID) -> Pet</code>
- <code title="put /pet">client.pets.<a href="./src/resources/pets.ts">update</a>({ ...params }) -> Pet</code>
- <code title="delete /pet/{petId}">client.pets.<a href="./src/resources/pets.ts">delete</a>(petID) -> void</code>
- <code title="get /pet/findByStatus">client.pets.<a href="./src/resources/pets.ts">findByStatus</a>({ ...params }) -> PetFindByStatusResponse</code>
- <code title="get /pet/findByTags">client.pets.<a href="./src/resources/pets.ts">findByTags</a>({ ...params }) -> PetFindByTagsResponse</code>
- <code title="post /pet/{petId}">client.pets.<a href="./src/resources/pets.ts">updateByID</a>(petID, { ...params }) -> void</code>
- <code title="post /pet/{petId}/uploadImage">client.pets.<a href="./src/resources/pets.ts">uploadImage</a>(petID, image, { ...params }) -> PetUploadImageResponse</code>

# St00000re

Types:

- <code><a href="./src/resources/st00000re/st00000re.ts">St00000reListInventoryResponse</a></code>

Methods:

- <code title="get /st00000re/inventory">client.st00000re.<a href="./src/resources/st00000re/st00000re.ts">listInventory</a>() -> St00000reListInventoryResponse</code>

## Orders

Methods:

- <code title="post /st00000re/order">client.st00000re.orders.<a href="./src/resources/st00000re/orders.ts">create</a>({ ...params }) -> Order</code>
- <code title="get /st00000re/order/{orderId}">client.st00000re.orders.<a href="./src/resources/st00000re/orders.ts">retrieve</a>(orderID) -> Order</code>
- <code title="delete /st00000re/order/{orderId}">client.st00000re.orders.<a href="./src/resources/st00000re/orders.ts">delete</a>(orderID) -> void</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserLoginResponse</a></code>

Methods:

- <code title="post /user">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> User</code>
- <code title="get /user/{username}">client.users.<a href="./src/resources/users.ts">retrieve</a>(username) -> User</code>
- <code title="put /user/{username}">client.users.<a href="./src/resources/users.ts">update</a>(existingUsername, { ...params }) -> void</code>
- <code title="delete /user/{username}">client.users.<a href="./src/resources/users.ts">delete</a>(username) -> void</code>
- <code title="post /user/createWithList">client.users.<a href="./src/resources/users.ts">createWithList</a>([ ...items ]) -> User</code>
- <code title="get /user/login">client.users.<a href="./src/resources/users.ts">login</a>({ ...params }) -> string</code>
- <code title="get /user/logout">client.users.<a href="./src/resources/users.ts">logout</a>() -> void</code>
