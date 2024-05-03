/*

1) A query string is a part of url that contains data to be passed to the server in form of key-value pairs
2) It typically appears after '?' character in url and consists of multiple key-value pairs separated by & symbol
3) Ex:  "https://example.com/search?q=hello&limit=10",
   here, q and limit is key and hello and 10 are their corresponding values

4) When we request for any resource and we want to access this key-value pair data so that
   time we can access this query string by using Request object.

   Ex:   "https://example.com/search?q=hello&limit=10"

   req.query;       ->     {"q":"hello","limit":"10"}

*/