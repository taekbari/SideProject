# Quotes Rotator  

Codrops 사이트에 있는 [Quotes Rotator](https://tympanus.net/codrops/2013/03/29/quotes-rotator/) 샘플을 따라 만들었다.  
4가지의 인용문을 일정 시간 간격으로 화면이 전환되며 보여주는 샘플이다. 화면이 전환되는 시간동안 Progress Bar와 비슷하게 진행상황을 보여준다.  

## 작성하면서 공부한 내용  

### `<blockquote>`  

인용문을 표시할 때 사용하는 태그로 `<blockquote>` 요소를 사용한 곳은 들여쓰기가 된다.  

* `cite` 속성 : 인용문의 출처를 표시하며 화면에서 특별히 표시되는 부분은 없지만, 검색 엔진이 이 주소 정보를 사용할 수 있다.  

#### `<cite>`  

`cite` 속성과 달리, 책, 영화, 그림 같은 작품의 제목을 지정할 때 사용한다. 이탤릭체로 표시된다.   

### `pointer-events`  

HTML 요소들의 마우스/터치 이벤트들(CSS hover/active, JS click/tap, 커서 드래그등)의 응답을 조정할 수 있는 속성  
`pointer-events` 속성은 11개의 속성값을 가지지만 3개를 제외하고는 모두 SVG에서 사용하도록 예약되어 있다.  
* none : HTML 요소에 정의된 클릭, 상태(hover, active 등), 커서 옵션들을 비활성화한다.  
* auto : 비활성화된 이벤트를 다시 기본 기능을 하도록 되돌린다.  
* inherit : 부모 요소로부터 `pointer-events` 값을 상속받는다.  

### `jQuery` 함수  

#### `extend`  

두 개 이상의 객체를 합치는 함수  

```  
jQuery.extend(target, [, object1][, objectN])
jQuery.extend([deep], target, [, object1][, objectN])
```  
* deep : true로 설정할 경우, 깊은 수준 복사가 된다. (반복적으로 병합됨)
* target : 합쳐지는 추가 객체의 속성을 받을 객체 또는 유일한 인자일 경우 jQuery 네임스페이스로 확장될 객체  
* object1 : 합쳐질 때 기준이 될 객체  
* objectN : 기준 객체에 합쳐질 추가 객체  

##### Examples  

```javascript  
var object1 = {
  apple: 0,
  banana: {
    weight: 52,
    price: 100
  },
  cherry: 97
}
var object2 = {
  banana: {
    price: 200
  },
  durian: 100
}

$.extend(object1, object2);
```  
> 결과  

```javascript  
{
  apple: 0,
  banana: {
    price: 200
  },
  cherry: 97,
  durian: 100
}
```  

deep 속성을 true로 설정할 경우,
```javascript  
var object1 = {
  apple: 0,
  banana: {
    weight: 52,
    price: 100
  },
  cherry: 97
}
var object2 = {
  banana: {
    price: 200
  },
  durian: 100
}

$.extend(true, object1, object2);
```  
> 결과  

```javascript  
{
  apple: 0,
  banana: {
    weight: 52,
    price: 200
  },
  cherry: 97,
  durian: 100
}
```  

#### `appendTo`  

새로운 요소를 target에 해당하는 요소(들) 마지막에 추가하는 함수  
```  
.appendTo(target)
```  
* target : 새로운 요소를 추가할 대상 요소  

> `.append()` 와의 차이점  
> `append`와 `appendTo` 함수는 동일한 기능을 하지만 추가될 컨텐츠와 타겟의 위치의 차이가 있다.  
> `append`함수는 `A.append(B)`라면 A 요소 사이에 B 요소를 추가하는 것이고 `A.appendTo(B)`는 A 요소가 B 요소 사이에 추가되는 것이다.  

#### `proxy`  

함수를 전달받아 특정 컨텍스트를 갖는 새로운 함수를 반환하는 함수
함수 내부의 `this` 컨텍스트를 바꾸는 ES5의 `bind()`와 비슷한 동작을 한다.  
```  
jQuery.proxy(function, context)
jQuery.proxy(context, name)
```

#### `each`  

`each` 함수는 요소를 반복하는 함수와 객체와 배열을 반복하는 함수 두 가지가 존재한다.  
```  
.each(function)
```  
위의 형식으로 사용할 경우에는 일치하는 각각의 요소에 대해 함수를 실행해 jQuery 객체를 반복한다.  
```  
jQuery.each(array, callback)
jQuery.each(object, callback)
```  
위의 형식으로 사용할 경우에는 전달받은 객체 또는 배열에 대해 callback 함수를 실행한다.  

#### `data`  

HTML 요소 내에 데이터를 저장하고 읽는 역할을 하는 함수  
해당 요소에 javascript type의 value를 저장할 수 있으며, 값으로 저장되어 있는 데이터를 읽는다.
```  
jQuery.data(element, key, value)
jQuery.data(element, key)
```  
위의 형식으로 데이터를 저장하거나 저장된 값을 가져온다.  

---  

### 참고 사이트  

* [blockquote 태그(인용문 꾸미기 5가지) :: 지구별 안내서](http://aboooks.tistory.com/258)  
* [CSS 이벤트 제어(pointer-events ) 속성](http://webdir.tistory.com/506)  
* [jQuery.extend()](https://api.jquery.com/jquery.extend/)  
* [.appendTo()](http://api.jquery.com/appendto/)  
* [jQuery.each()](http://api.jquery.com/jQuery.each/)  
* [.each()](http://api.jquery.com/each/)  
* [jQuery.data()](https://api.jquery.com/jquery.data/)  
