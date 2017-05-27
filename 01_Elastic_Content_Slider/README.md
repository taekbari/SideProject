# Elastic Content Slider  

Codrops 사이트에 있는 [Elastic Content Slider](https://tympanus.net/codrops/2013/02/26/elastic-content-slider/) 샘플을 따라 만들었다.  
하단의 탭 유형의 네비게이션을 클릭하면 컨텐츠 영역의 내용이 좌우로 슬라이드 되는 기능을 제공한다.  
샘플에서는 jQuery를 사용한 cbpContentSlider Plugin을 제공하며, 컨텐츠 영역과 네비게이션 영역을 포함하는 부모 요소에 적용하면 된다.  

## 소스 작성하면서 변경된 점  

* `main`영역의 마크업 : 기존에 `div`요소로 되어있던 부분을 `main` 요소로 변경  

* 하단 네비게이션의 마크업  

> 기존 소스  

```html  
<nav>
  <a href="#slide1" class="icon-wolf"><span>Wolf</span></a>
  <a href="#slide2" class="icon-rabbit"><span>Rabbit</span></a>
  <a href="#slide3" class="icon-aligator"><span>Aligator</span></a>
  <a href="#slide4" class="icon-turtle"><span>Turtle</span></a>
  <a href="#slide5" class="icon-platypus"><span>Platypus</span></a>
</nav>
```  

> 변경 소스. 링크들을 목록으로 판단하여 리스트 적용.  

```html  
<nav>
  <ul class="clearfix">
    <li><a href="#slide1" class="icon-wolf"><span>Wolf</span></a></li>
    <li><a href="#slide2" class="icon-rabbit"><span>Rabbit</span></a></li>
    <li><a href="#slide3" class="icon-aligator"><span>Aligator</span></a></li>
    <li><a href="#slide4" class="icon-turtle"><span>Turtle</span></a></li>
    <li><a href="#slide5" class="icon-platypus"><span>Platypus</span></a></li>
  </ul>
</nav>
```  
리스트로 변경하면서 네비게이션 링크를 선택할 수 있도록 `css`와 `javascript`도 같이 수정

## 작성하면서 공부한 내용  

### 웹 폰트  

* 사용자의 로컬 컴퓨터에 서비스 제공자가 원하는 서체가 없을 경우, 온라인의 특정 서버에 위치한 서체 파일을 내려 받아 화면에 표현할 수 있도록 해주는 웹 전용 서체  
* `CSS3` 규약을 사용하면 원하는 서체 스타일시트의 `@font-face`에 등록하고, `font-family` 속성을 통해 문서 안에서 사용  

#### `@font-face`  

> 아래 내용은 링크된 블로그에서 내용을 발췌해 왔습니다.  
> [웹폰트 사용하기 (웹폰트 101)](http://wit.nts-corp.com/2017/02/13/4258)  

기본 규칙  
```css  
@font-face {
  font-family: 'fontawesome';
  src: local(fontawesome);
  src: url('../fonts/fontawesome.eot');
  src: url('../fonts/fontawesome.eot?#iefix')
  format('embedded-opentype'),
    url('../fonts/fontawesome.svg#fontawesome') format('svg'),
    url('../fonts/fontawesome.woff') format('woff'),
    url('../fonts/fontawesome.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
```  

* `font-family` : 문서에서 사용할 서체 이름  
* `src` : 로컬에 설치 된 서체의 경로를 적는 `local()`과 온라인상의 서체 주소를 적는 `url()` 사용  
* `font-style` : 폰트 스타일  
* `font-weight` : 폰트 굵기  

##### IE 6~8 대응  

IE 6~8은 EOT 파일만 지원하므로 EOT 파일을 내려받도록 해야한다. IE 6~8은 `format('embedded-opentype')`와 같은 포맷명을 해석하지 못하기 때문에 자기가 포함된 src의 다른 서체까지 모두 내려받으려고 한다. 하지만 EOT 포맷 외에는 해석을 못하므로 서체를 불러오지 못하거나 404 Not Found가 발생하곤 한다. 그래서 파일명 뒤에 물음표(?)를 추가해서 이후의 구문은 쿼리문으로 인식하여 해석하지 못하게끔 속임수를 사용한다.

```css  
@font-face {
  src: url('../fonts/fontawesome.eot?#iefix')
  format('embedded-opentype'),
    url('../fonts/fontawesome.ttf') format('truetype');
}
```  

##### IE 9 이상 및 IE 9 호환성 보기 모드 대응  

IE 9 이상부터는 EOT와 함께 WOFF 포맷도 해석할 수 있게 되었다. 하지만 IE의 호환성 보기 모드에서는 이전에 사용한 물음표 속임수를 사용할 수 없게 되었다. 물음표가 추가된 EOT 파일은 아예 인식이 되지 않도록 문서 모드가 수정됐기 때문이다. 인식도 안될 EOT 구문이 다른 포맷들과 함께 src 속성에 묶여있으면 다른 포맷을 다운받기 위한 시도를 하기 때문에, 아예 src를 따로 구분하여 별도 정의한다.  

### `font-size: 100%`  

```css  
body {
  font-size: 100%;
}
```  
브라우저에 설정되어있는 폰트의 크기를 기본 값으로 설정한다.  

### micro clearfix  

가상요소를 사용하여 float를 해제하는 방법을 좀더 안전하게 사용하기 위해 개발된 micro 방식  

```css  
.clearfix::before,
.clearfix::after {
  content: '';
  display: table;
}

.clearfix::after {
  clear: both;
}
```  
오페라의 경우 `html`문서에서 `contenteditable` 속성을 사용할 경우에 float가 취소된 요소의 상단과 하단에 빈 공백을 만들게 되기 때문에 `content: ''`는 오페라의 벅를 피하기 위한 방법이며, 자식 요소의 `margin-top` 값을 포함하도록 하기 위해 `before`를 이용하여 `display: table`을 설정해 준다.  

> 참고 사이트  
> [Web Club :: float 해제: Micro clearfix vs Legacy clearfix](http://webclub.tistory.com/183)  

### `speak`  

브라우저가 컨텐츠를 어떻게 읽을 것인지 설정하는 `CSS` 속성  
`none`으로 설정하면 해당요소를 읽지 않는다.  
```css
.icon {
  speak: none;
}
```

### `:target`  

목적 선택자. E의 URI가 요청되면 선택한다.  
> E는 ID가 지정되어 있어야 한다.  

```css  
E:target {
}
```

### 다단 레이아웃  

`CSS` 속성을 사용하여 다단 레이아웃을 설정할 수 있다.  

* `column-count` : 다단의 수를 설정하는 속성  
* `column-width` : 최소 단 너비 설정하는 속성. 단수 설정되지 않은 경우, 브라우저는 자동으로 이용 가능한 너비에 맞게 많은 단을 만듬.    
* `column-gap` : 단 사이의 간격을 설정하는 속성  
* `column-rule` : 단과 단 사이의 선 모양을 설정하는 속성  

```css
.cbp-contentslider .cbp-content {
  column-rule: 1px dashed #47a3da;
  column-count: 2;
  column-gap: 1em;
}
```  
