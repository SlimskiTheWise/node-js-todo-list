create table todo (
    id int auto_increment primary key,
    title varchar(255),
    content varchar(255),
    status varchar(255),
    created_at timestamp
)