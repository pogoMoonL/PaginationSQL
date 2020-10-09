# Lab:

user table in mysql database

|user_id        |Last Name   | First Name |
|------------|------------|------------|
|1                  |Bagshot      | Bathilda       |
|2                  |Black      | Sirius       |
|3                  |Brown      | Lavender       |
|4                  |Chang      | Cho       |
|5                  |Creevey      | Colin       |
|6                  |Crouch      | Bartemius       |
|7                 |Delacour      | Fleur       |
|8                  |Diggle      | Dedalus       |
|9                  |Diggory      | Cedric       |
|10                  |Dumbledore      | Aberforth       |
|11                  |Dumbledore      | Albus       |
|12                  |Dursley      | Dudley       |
|13                  |Dursley      | Petunia       |
|14                  |Dursley      | Vernon       |
|15                  |Filch      | Argus       |
|16                  |Finnigan      | Seamus       |
|17                  |Fletcher      | Mundungus       |

------------------

With a limit of 5 per page, we would expect the first and second page to look like:
Page 1:
|user_id        |Last Name   | First Name |
|------------|------------|------------|
|1                  |Bagshot      | Bathilda       |
|2                  |Black      | Sirius       |
|3                  |Brown      | Lavender       |
|4                  |Chang      | Cho       |
|5                  |Creevey      | Colin       |

Page 2:

|user_id        |Last Name   | First Name |
|------------|------------|------------|
|6                  |Crouch      | Bartemius       |
|7                 |Delacour      | Fleur       |
|8                  |Diggle      | Dedalus       |
|9                  |Diggory      | Cedric       |
|10                  |Dumbledore      | Aberforth       |

-----------
## DDL

 ```sql
create table User(
   user_id INT NOT NULL AUTO_INCREMENT,
   last_name VARCHAR(40) NOT NULL,
   first_name VARCHAR(40) NOT NULL,
   PRIMARY KEY ( user_id )
);
```
## DML

```sql
INSERT INTO User (last_name,first_name)
VALUES ('Bagshot','Bathilda'),
('Black','Sirius'),
('Brown','Lavender'),
('Chang','Cho'),
('Creevey','Colin'),
('Crouch','Bartemius'),
('Delacour','Fleur'),
('Diggle','Dedalus'),
('Diggory','Cedric'),
('Dumbledore','Aberforth'),
('Dumbledore','Albus'),
('Dursley','Dudley'),
('Dursley','Petunia'),
('Dursley','Vernon'),
('Filch','Argus'),
('Finnigan','Seamus'),
('Fletcher','Mundungus');

```


# Restful API

URL: /user?limit=5

```json
{    
   "data": [
        {
             "last_name" : "Bagshot",
             "first_name" : "Bathilda",
        }
    ],
    "cursor": {
        "previous_page": "/user?limit=5&before=cHJldl9fX0Nyb3VjaA==" , 
        "next_page": "/user?limit=5&after= bmV4dF9fX0R1bWJsZWRvcmU="
    }
}
```
----------------
# Time complexity and space complexity
![image](https://user-images.githubusercontent.com/8554998/94981431-eca46f80-0564-11eb-9f3f-d7e28a041a88.png)

----------------
## urlbase64

base64的應用特別廣泛，個人在開發中遇到最多的兩個方面，第一個是URL的base64，另一個是圖片base64。

先說第一種，已經有urlencode了，為什麼還需要base64 的URL。各有用途。



urlencode是將-_. 之外的所有非字母數字字符都將被替換成百分號（%）後跟兩位十六進位數，空格則編碼為加號（+）。如果一個URL裡面有+ 有空格，是不是urlencode就搞不定，使用base64就會迎刃而解。帶來的代價就URL比原理長了1/3

圖片編碼的問題，經常跟客戶端開發的時候，客戶端使用二進位流上傳圖片的時候比較複雜，就可以使用base64將圖片的二進位編碼轉成base64，服務端接到數據之後再basedecode之後就是圖片的二進位流。特別方便，帶來的結果就是，傳輸的數據多了1/3。
# Reference
[how-to-implement-cursor-pagination-like-a-pro ](https://medium.com/swlh/how-to-implement-cursor-pagination-like-a-pro-513140b65f32
)
[Server side Pagination in Node.js with Sequelize & MySQL
](https://bezkoder.com/node-js-sequelize-pagination-mysql/)

[What is the purpose of base64 encoding, why not just use binary?  ](https://www.quora.com/What-is-the-purpose-of-base64-encoding-why-not-just-use-binary)
[nodejs overview](https://github.com/jollen/nodejs-fullstack-book)
