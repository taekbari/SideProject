# Horizontal DropDown Menu  

Codrops 사이트에 있는 [Horizontal DropDown Menu](https://tympanus.net/codrops/2013/03/05/horizontal-drop-down-menu/) 샘플을 따라 만들었다.  
가로로 정렬된 메뉴를 클릭하면 DropDown 형식으로 내부에 포함된 메뉴가 표시된다.  

## 작성하면서 공부한 내용  

### 이벤트 전파  

계층적 구조의 포함되어 있는 특정 요소에 이벤트가 발생할 경우, 연쇄적으로 반응이 일어나는 것으로 전파 방향에 따라 버블링 (Event Bubbling)과 캡쳐링 (Event Capturing)으로 구분된다.  

##### 버블링 (Bubbling)  

자식 요소에서 이벤트가 발생하여 부모 요소로 전파되는 것  

##### 캡쳐링 (Capturing)  

부모 요소에서 이벤트가 발생하여 자식 요소로 전파되는 것  
> 캡쳐링은 IE8 이하에서는 지원되지 않는다.  

### `Event.preventDefault()`  

폼을 submit하거나 링크를 클릭하면 다른 페이지로 이동하게 되는 것 처럼 요소가 가지고 있는 기본 동작을 중단시키기 위한 메서드  

### `Event.stopPropagation()`  

어느 한 요소를 이용하여 이벤트를 처리한 후 이벤트가 부모 요소로 버블링되거나 자식 요소로 캡쳐링되는 것을 중단시키기 위한 메서드  

### `Event.currentTarget`  

이벤트가 발생했을 때, 이벤트가 실제로 붙어있는 (이벤트를 선언해서 가지고 있는) 요소를 나타낸다. 이는 `Event.target`과는 조금 다른데 `Event.target`의 경우에는 이벤트가 일어난 요소를 나타낸다.  

만약 부모 요소가 자신보다 작은 크기의 요소를 포함하고 있고, 부모 요소에 클릭 이벤트를 설정했다고 하자. 이 때, 부모 영역을 클릭하면, `Event.target`과 `Event.currentTarget` 모두 부모 요소를 나타내지만, 자식 영역을 클릭하면, 이벤트가 발생항 위치가 자식 요소이기 때문에, `Event.target`은 자식 요소, `Event.currentTarget`은 부모 요소를 나타내게 된다.  

---

#### 참고 사이트  

* [PoiemaWeb : 사용자와 웹페이지의 상호작용을 위한 이벤트](http://poiemaweb.com/js-event)  
