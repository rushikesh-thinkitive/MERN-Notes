/*

1) When we need to fetch data from url then we use Dynamic Routing
2) To capture data from URL, we use Route parameter
3) req.params ->   
   where req -> Request Object
   params    -> property
   
4) In params, data comes in form of object
5) URL ->  /student/:id/             ->    www.learning.com/student/12
    req.params;         ->         {"id":"12"}

6) /product/:category/:id   ->       ->    www.amazon.com/product/Farari/20
   req.params           ->         {"category":"Farari","id":"20"}

7) In params object, key will become the mentioned string after : and value will be the value you have actually
   passed in URL

*/