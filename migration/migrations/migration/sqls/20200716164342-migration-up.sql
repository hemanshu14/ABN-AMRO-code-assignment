/* Replace with your SQL commands */

CREATE TABLE nerfHerdersData (
    parentId varchar(255),
    name varchar(255),
    description varchar(255),
    PRIMARY KEY (name)
);

INSERT INTO `nerfHerdersData` (`parentId`,`name`,`description`) VALUES ('','A','This is a description of A');
INSERT INTO `nerfHerdersData` (`parentId`,`name`,`description`) VALUES ('A','B','This is a description of B');
INSERT INTO `nerfHerdersData` (`parentId`,`name`,`description`) VALUES ('B','B-1','This is a description of B-1');
INSERT INTO `nerfHerdersData` (`parentId`,`name`,`description`) VALUES ('B','B-2','This is a description of B-2');
INSERT INTO `nerfHerdersData` (`parentId`,`name`,`description`) VALUES ('B','B-3','This is a description of B-3');
INSERT INTO `nerfHerdersData` (`parentId`,`name`,`description`) VALUES ('A','C','This is a description of C');
INSERT INTO `nerfHerdersData` (`parentId`,`name`,`description`) VALUES ('A','D','This is a description of D');
