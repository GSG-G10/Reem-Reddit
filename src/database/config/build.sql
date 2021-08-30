Begin;
DROP TABLE IF EXISTS USERS,COMMENT,POSTS CASCADE;
CREATE TABLE  USERS (
    USERNAME VARCHAR(25) PRIMARY KEY,
    EMAIL TEXT NOT NULL,
    USER_PASSWORD TEXT NOT NULL,
    PICTURE TEXT 
);
CREATE TABLE  POSTS (
    ID SERIAL PRIMARY KEY,
    USERNAME VARCHAR(25)  REFERENCES  USERS(USERNAME) ON DELETE CASCADE,
    POST_CONTENT TEXT NOT NULL,
    VOTES INTEGER DEFAULT 1,
    POST_TIME  timestamp DEFAULT current_timestamp
);
CREATE TABLE  COMMENT (
    ID SERIAL PRIMARY KEY,
    USERNAME VARCHAR(25)  REFERENCES  USERS(USERNAME) ON DELETE CASCADE,
    POST_ID INTEGER REFERENCES POSTS(ID) ON DELETE CASCADE,
    VOTES INTEGER DEFAULT 1,
    POST_TIME  timestamp DEFAULT current_timestamp,
    COMMENT_CONTENT TEXT NOT NULL
);


COMMIT;
