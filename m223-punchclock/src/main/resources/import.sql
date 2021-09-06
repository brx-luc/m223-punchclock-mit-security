insert into `DEPARTMENT`(ID, DEPARTMENT_NAME) values ( 1, 'A' );
insert into `DEPARTMENT`(ID, DEPARTMENT_NAME) values ( 2, 'B' );
insert into `DEPARTMENT`(ID, DEPARTMENT_NAME) values ( 3, 'C' );
insert into `DEPARTMENT`(ID, DEPARTMENT_NAME) values ( 4, 'D' );
insert into `DEPARTMENT`(ID, DEPARTMENT_NAME) values ( 5, 'E' );


insert into TASK(ID, TASK_NAME) values ( 1, 'Testing' );
insert into TASK(ID, TASK_NAME) values ( 2, 'Development Backend' );
insert into TASK(ID, TASK_NAME) values ( 3, 'Development Frontend' );
insert into TASK(ID, TASK_NAME) values ( 4, 'Support' );

insert into APPLICATION_USER(ID, USERNAME, PASSWORD, DEPARTMENT_ID) values ( 1, 'testUser', '$2a$12$MkJGKjyBSmAoTy2nr0ZAy.82BD0VjMicOshxbPLMbbt0YE/ESC5iS', 3 );