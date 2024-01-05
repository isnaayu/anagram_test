
--select * from m_parent;
select * from m_child;

--insert into m_parent (name,address,phone) values ('Budi', 'Ragunan No. 12', '823234344');
--insert into m_parent (name,address,phone) values ('Ilham', 'Ragunan No. 2', '08342223');
--insert into m_parent (name,address,phone) values ('Ilham', 'Ragunan No. 3', '08342223');
--insert into m_parent (name,address,phone) values ('Ilham', 'Ragunan No. 4', '08656566');
--insert into m_parent (name,address,phone) values ('Ilham', 'Ragunan No. 5', '08545353');


--insert into m_child (name,parent_id) values ('Zaki',2);
--insert into m_child (name) values ('Ilham');
--insert into m_child (name,parent_id) values ('Irwan',2);
--insert into m_child (name,parent_id) values ('Arka',3);

--ALTER TABLE m_child ADD CONSTRAINT fk_child FOREIGN KEY(parent_id) REFERENCES m_parent(id) ON DELETE CASCADE ON UPDATE CASCADE;

select C.id, C.name, P.name as parent_name from m_child C left join m_parent P on P.id=C.parent_id ;



