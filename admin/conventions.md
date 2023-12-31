Last updated 12/12/2023

# Conventions

This file will be used for naming conventions and other code conventions for this project.

## Documentation

Documentation is done through JSDocs and Better-Docs.

### Components

Documentation conventions for components shall be decided at a later date.

### Functions

For utility, API, or other functions, use the following standard JSDocs template:

```js
/**
 * <function description>
 * @param   {<type>} param1 <description>
 * @param   {<type>} param2 <description>
 * @param   {<type>} param3 <description>
 * @return  {<type>}        <description>
 */
```

An example of the above template is provided below:

```js
/**
 * return full name of the user
 * @param   {string} firstName  First Name of the User
 * @param   {string} lastName   Last Name of the User
 * @return  {string}            Fullname of the user
 */
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
```
