# Tiled Background Slideshow  

Codrops 사이트에 있는 [Tiled Background Slideshow](https://tympanus.net/codrops/2014/06/11/how-to-create-a-tiled-background-slideshow/) 샘플을 따라 만들었다.  
4개의 타일을 구성하여 슬라이드쇼 효과를 적용한 샘플이다. 3D transforms, transition 그리고 animation을 사용하였다.  

> 슬라이드 효과 구성 아이디어  

`img` 요소를 사용하여 기본 마크업을 구성한 후 스크립트에서 4개로 분할된 요소로 재구성한다.  

> 기본 마크업  

```html  
<div id="boxgallery" class="boxgallery" data-effect="effect-1">
  <div class="panel">
    <img src="img/1.jpg" alt="Image 1">
  </div>
</div>
```  

> 스크립트 적용 후  

```html  
<div id="boxgallery" class="boxgallery" data-effect="effect-1">
	<div class="panel current">
		<div class="bg-tile">
			<div class="bg-img"><img src="img/1.jpg" /></div>
		</div>
		<div class="bg-tile">
			<div class="bg-img"><img src="img/1.jpg" /></div>
		</div>
		<div class="bg-tile">
			<div class="bg-img"><img src="img/1.jpg" /></div>
		</div>
		<div class="bg-tile">
			<div class="bg-img"><img src="img/1.jpg" /></div>
		</div>
	</div>
</div>
```  

## 작성하면서 공부한 내용  

### `3D transform`  

트랜스폼은 요소의 이동(`translate`), 회전(`rotate`), 확대축소(`scale`), 비틀기(`skew`) 효과를 제공한다. 단 애니메이션 효과를 제공하지 않기 때문에 정의된 속성이 바로 적용되어 화면에 표시된다. 트랜스폼은 2D 뿐만 아니라 3D 효과도 제공한다.  

#### `translate3d()`  

현재 위치에서 해당 요소를 주어진 x축, y축 그리고 z축의 거리만큼 이동시킨다. 주어진 거리가 양수이면 해당 축의 양의 방향으로, 음수이면 해당 축의 음의 방향으로 이동시킨다.

```css  
.panel {
  transform: translate3d(0, 0, 380px);
}
```  

#### `perspective`  

3D 공간의 느낌을 구성하기 위해 필요한 속성이다. 픽셀 기반의 길이 값을 사용하며 z축을 따라 캔버스로부터 관찰자의 거리를 나타낸다. 0 또는 음수 값은 입체적인 변화가 없고 0에 가까울수록 급격하게 변화한다.  

```css  
.panel {
  perspective: 1200px;
}
```  

#### `backface-visibility`  

입체적인 모습 뒷면의 가시성을 결정하는 속성이다. 즉, 변형이 가해져 요소의 뒷면이 보여지게 될때, 이 속성으로 숨기거나 보여지게 할 수 있다. 기본 값으로 `visible`이 설정되며 미러 이미지를 표시한다.  

### Element Size  

#### `offsetWidth` , `offsetHeight`  

`offsetWidth`와 `offsetHeight`는 W3C 권고안이 아니며 read-only 속성값이다.  
> `offsetWidth` : 요소의 `border`, `padding`, `vertical scrollbar` 그리고 `css width`를 포함한 값  
> `offsetHeight` : 요소의 `border`, `padding`, `horizontal scrollbar` 그리고 `css height`를 포함한 값  

#### `clientWidth` , `clientHeight`  

`clientWidth`와 `clientHeight`는 W3C 권고안이 아니며 read-only 속성값이다.  
> `clientWidth` : 요소의 `padding`과 `css width`를 포함한 값으로 `vertical scrollbar` 넓이는 포함하지 않는다.  
> `clientHeight` : 요소의 `padding`과 `css height`를 포함한 값으로 `horizontal scrollbar` 높이는 포함하지 않는다.  

#### `scrollWidth` , `scrollHeight`  

`scrollWidth`와 `scrollHeight`는 W3C 권고안이 아니며 read-only 속성값이다.  
> `scrollWidth` : 요소의 컨텐츠 넓이로 화면에 보이지 않는 컨텐츠도 포함한다.  
> `scrollHeight` : 요소의 컨텐츠 높이로 화면에 보이지 않는 컨텐츠도 포함한다.  

### Window Size  

#### `innerWidth` , `innerHeight`  

> `innerWidth` : 툴바, 창틀 등의 값을 뺀 브라우저의 넓이로 스크롤 값은 포함한다.  
> `innerHeight` : 툴바, 창틀 등의 값을 뺀 브라우저의 높이로 스크롤 값은 포함한다.  

#### `outerWidth` , `outerHeight`  

> `outerWidth` : 툴바, 창틀 등의 브라우저 윈도우 두께를 포함한 브라우저의 넓이  
> `outerHeight` : 툴바, 창틀 등의 브라우저 윈도우 두께를 포함한 브라우저의 높이  

---  

### 참고 사이트  

* [3D Transform](http://tcpschool.com/css/css3_transform_3Dtransform)  
* [CSS3 이면가시성(backface-visibility) 속성](http://webdir.tistory.com/431)  
