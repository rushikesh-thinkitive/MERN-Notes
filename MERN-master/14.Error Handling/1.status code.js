/*


1) These status codes are standardized and provide a way for servers to indicate to clients whether a 
   request was successful, encountered an error, or requires further action
2) 2XX - success ->

    200 OK: The request was successful.
    201 Created: The request resulted in the creation of a new resource.
    204 No Content: The server successfully processed the request but there is no content to return.


3) 3XX - Redirection ->
   
    301 Moved Permanently: The requested resource has been permanently moved to a new URL.
    302 Found (or 307 Temporary Redirect): The requested resource has been temporarily moved to a new URL.
    304 Not Modified: The client's cached copy of the resource is still valid.

4) 4XX - Client Side Errors ->

    400 Bad Request: The request was malformed or invalid.
    401 Unauthorized: The client needs to authenticate to access the resource.
    403 Forbidden: The client does not have permission to access the resource.
    404 Not Found: The requested resource could not be found.


5) 5XX - Server Side Errors ->
   
    500 Internal Server Error: A generic error message indicating that something went wrong on the server.
    502 Bad Gateway: The server received an invalid response from an upstream server.
    503 Service Unavailable: The server is currently unable to handle the request due to temporary overloading or maintenance.

*/