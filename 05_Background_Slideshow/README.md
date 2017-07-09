# Background Slideshow  

Codrops 사이트에 있는 [Background Slideshow](https://tympanus.net/codrops/2013/04/17/background-slideshow/) 샘플을 따라 만들었다.  
6가지의 배경 화면이 일정 시간 간격으로 전환되는 샘플이다. 화면 가운데는 화면을 컨트롤할 수 있는 버튼이 있어서 수동적으로 화면 전환이 가능하다. 이 샘플에서는 jQuery 플러그인 중 하나인 imagesLoaded를 사용하였다.  

## 작성하면서 공부한 내용  

### `imagesLoaded`  

문서 안에 또는 특정 요소 안에 있는 이미지가 모두 로딩되었는지 감지하는 자바스크립트 라이브러리.  
이미지가 로딩되기 전에, 로딩 중에 있을 때, 로딩된 후에 어떤 작업을 하고 싶을 때 유용.  

#### 사용법  

##### JavaScript 파일 연결  

```javascript  
<script src="js/jquery.imagesloaded.min.js"></script>
```  

##### jQuery Plugin  

```javascript  
$('#container').imagesLoaded( function() {
  // images have loaded
});

// options
$('#container').imagesLoaded( {
  // options...
  },
  function() {
    // images have loaded
  }
);
```  

`imagesLoaded()` 함수는 jQuery Deferred Object를 반환하기 때문에, `always()`, `done()`, `fail()` 그리고 `progress()`도 사용할 수 있다.  

```javascript  
$('#container').imagesLoaded()
  .always( function( instance ) {
    console.log('all images loaded');
  })
  .done( function( instance ) {
    console.log('all images successfully loaded');
  })
  .fail( function() {
    console.log('all images loaded, at least one is broken');
  })
  .progress( function( instance, image ) {
    var result = image.isLoaded ? 'loaded' : 'broken';
    console.log( 'image is ' + result + ' for ' + image.img.src );
  });
```  

### jQuery Deferred Object  

jQuery Deferred는 각각의 비동기식 처리에 Promise 객체를 연계하여 그 상태를 전파하는 것으로 promise를 구현한 jQuery 객체.  
jQuery Deferred에서 각각의 비동기식 처리를 Deferred 객체로 wrapping한다. Deferred 객체는 상태를 가지고 있는데 이는 비동기식 처리의 상태가 변경되는 시점에 특정 함수(`resolve()`, `reject()`)를 호출하여 Deferred 객체에 상태를 부여하기 때문이다.  

일반적인 처리 순서는 다음과 같다.  
1. `$.Deferred()`로 Deferred 객체 생성  
2. 비동기 처리가 종료하면 Deferred 객체의 `resolve()` 또는 `reject()`로 Deferred 객체의 state를 변경  
3. `promise()`로 Deferred 객체가 가지고 있는 Promise 객체를 반환한다. 반환된 객체는 Deferred 객체의 `resolve()`와 `reject()`를 더이상 사용할 수 없게 되어 비동기 처리 상태를 보장할 수 있게 된다.  

---  

### 참고 사이트  

* [imagesLoaded](https://imagesloaded.desandro.com/)  
* [JavaScript 강좌 | Library > imagesLoaded - 이미지가 로드되었음을 감지하는 라이브러리](https://www.cmsfactory.net/node/11093)  
* [jQuery Deferred Object](http://poiemaweb.com/jquery-deferred)  
