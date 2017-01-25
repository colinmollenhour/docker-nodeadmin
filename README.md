Dockerfile for NodeAdmin
------------------------

This is a simple Docker image for running (NodeAdmin)[https://github.com/nodeadmin/nodeadmin].

### Usage:

    ### Run a MySQL server which will be accessed as "mysql"
    $ docker run --name mysql-test -e MYSQL_ROOT_PASSWORD=foobar -d mysql:latest
    ### Run nodeadmin, linking to mysql-test
    $ docker run --name nodeadmin -p 4040 --link mysql-test:mysql -d colinmollenhour/nodeadmin:latest

### Environment Variables

- PORT - The port number to listen on, defaults to 4040.

