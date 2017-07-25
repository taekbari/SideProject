# On Scroll Effect Layout  

Codrops 사이트에 있는 [On Scroll Effect Layout](https://tympanus.net/codrops/2013/07/18/on-scroll-effect-layout/) 샘플을 따라 만들었다.  
스크롤 위치에 따라 효과를 적용한 샘플이다. javascript를 통해 동적으로 스크롤의 위치를 판단해 클래스를 적용 또는 제거한다.  

## 작성하면서 공부한 내용  

### Element Position  

> `offsetParent` : 요소를 포함하는 가장 가까운 (포함 계층에서 가장 가까운) 객체를 나타내는 속성. 자식 요소의 위치에 영향을 미치는 상위 요소를 나타낸다.  
> `offsetTop` : `offsetParent` 속성에 해당하는 노드의 위쪽을 기준으로 현재 요소의 거리를 나타내는 속성  
> `offsetLeft` : 현재 요소의 왼쪽 위 모서리가 `offsetParent` 속성에 해당하는 노드의 왼쪽에서 얼마나 떨어져있는지 나타내는 속성  

### Scroll Position  

> `window.pageYOffset` : `scrollY`와 동일하며 문서가 현재 세로로 스크롤된 위치를 나타내는 속성  
> `Element.scrollTop` : 요소의 내용이 세로로 스크롤되는 위치를 가져오거나 설정하는 속성  

---  

### 참고 사이트  

* [HTMLElement.offsetParent](https://developer.mozilla.org/ko/docs/Web/API/HTMLElement/offsetParent)  
* [Window.pageYOffset](https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset)  
* [Element.scrollTop](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop)  
