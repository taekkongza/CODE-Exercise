# 정규 표현식 정리

# REGEX - regular expression
text에서 특정 패턴을 찾을때

/pattern/flag

/Hi/gm

> ### flag
>g global  
i case insensitive  
m multiline  
s single line  
u unicode  
y sticky  




## [강의 영상 ← 클릭](https://youtu.be/t3M6toIflyQ)

공부방법, 사용 예제, 유용한 사이트에 대한 정보는 유튜브 영상에서 확인해 보세요 🙌

연습용 사이트: [regexr.com/5mhou](https://regexr.com/5ml92)

## 문법 정리

### 그룹

### Groups and ranges

| Character | 뜻                                     |
| --------- | -------------------------------------- |
| `\|`      | 또는                                   |
| `()`      | 그룹                                   |
| `[]`      | 문자셋, 괄호안의 어떤 문자든           |
| `[^]`     | 부정 문자셋, 괄호안의 어떤 문가 아닐때 |
| `(?:)`    | 찾지만 기억하지는 않음                 |

---
(Hi|Hello)|(And)

그룹별로 매치 표시됨

gr(a|e)y
--그룹이 지정

gr(?:a|e)y
-- 지정안됨

gr(a|e|d)y --여러 또는
대괄호 사용

gr[a-f]y
gr[abdgGHI]y

/[a-zA-Z0-9]/gm

제외, not sign  
/[^a-zA-Z0-9]/gm

---

### 수량


### Quantifiers

| Character   | 뜻                                  |
| ----------- | ----------------------------------- |
| `?`         | 없거나 있거나 (zero or one)         |
| `*`         | 없거나 있거나 많거나 (zero or more) |
| `+`         | 하나 또는 많이 (one or more)        |
| `{n}`       | n번 반복                            |
| `{min,}`    | 최소                                |
| `{min,max}` | 최소, 그리고 최대                   |


---

/gray/gm

/gra?y/gm
-- a가 있거나, 없거나

/gra*y/  
graay

/gra+y/

/gra{2}y/

---
### Boundary-type

| Character | 뜻               |
| --------- | ---------------- |
| `\b`      | 단어 경계        |
| `\B`      | 단어 경계가 아님 |
| `^`       | 문장의 시작      |
| `$`       | 문장의 끝        |


/\bYa/
/Ya\b/

대문자는 반대 \B

/^Ya/

/$Ya/

---
### Character classes

| Character | 뜻                           |
| --------- | ---------------------------- |
| `\`       | 특수 문자가 아닌 문자        |
| `.`       | 어떤 글자 (줄바꿈 문자 제외) |
| `\d`      | digit 숫자                   |
| `\D`      | digit 숫자 아님              |
| `\w`      | word 문자                    |
| `\W`      | word 문자 아님               |
| `\s`      | space 공백                   |
| `\S`      | space 공백 아님              |
```
\[\]
\{\}
```

---
```
연습

전화번호 찾기
/\d{2,3}\D\d{3,4}\D\d{3,4}/gm

엘리
/\d{2,3}[- .]\d{3}[- .]\d{4}/gm


이메일
/.{1,}@.{1,}/gm
/.+@.+/gm

엘리
/[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9.]+/gm
????
/[a-zA-Z0-9._+-]+@[a-zA-Z0-9-.]+/gm


#### ?: 찾았지만 캡쳐하지 않음
유튜브 아이디만 찾기

/(https?:\/\/)?(www\.)?youtu.be\/[a-zA-Z0-9-]+/gm
아이디가 11개임을 알면
/(https?:\/\/)?(www\.)?youtu.be\/[a-zA-Z0-9-]{11}/gm

그룹이 3개로 만들어
/(https?:\/\/)?(www\.)?youtu.be\/([a-zA-Z0-9-]{11})/gm
이중에 아이디만 그룹 3만
/(?:https?:\/\/)?(?:www\.)?youtu.be\/([a-zA-Z0-9-]{11})/gm


console>

const regex = /(?:https?:\/\/)?(?:www\.)?youtu.be\/([a-zA-Z0-9-]{11})/;
undefined

const url = 'https://www.youtu.be/-ZClicWm0zM';
undefined

url.match(regex);
(2) ['https://www.youtu.be/-ZClicWm0zM', '-ZClicWm0zM', index: 0, input: 'https://www.youtu.be/-ZClicWm0zM', groups: undefined]
0: "https://www.youtu.be/-ZClicWm0zM"
1: "-ZClicWm0zM"
groups: undefined
index: 0
input: "https://www.youtu.be/-ZClicWm0zM"
length: 2
[[Prototype]]: Array(0)

const result = url.match(regex);
undefined

result[1];
'-ZClicWm0zM'

```


```
깃허브 정리 ⇢ https://github.com/dream-ellie/regex
연습용 사이트(강의노트) ⇢ regexr.com/5mhou
RegexOne(퀴즈) ⇢ https://regexone.com/


```