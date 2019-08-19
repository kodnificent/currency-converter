"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Selectjs =
/*#__PURE__*/
function () {
  function Selectjs() {
    var _this = this;

    _classCallCheck(this, Selectjs);

    this.selectDivs = document.querySelectorAll('.select-js');
    this.selectDivs.forEach(function (el) {
      var nativeSelect = document.querySelector('select');

      _this.updateCustomSelect(el, nativeSelect); // add click event to toggle select


      var cOption = el.querySelector('.current-option');

      cOption.onclick = function (e) {
        e.stopPropagation();
        return _this.toggleSelect(el);
      };

      var options = el.querySelectorAll('.custom-option');
      options.forEach(function (option) {
        option.onclick = function (e) {
          e.stopPropagation();

          _this.select(el, e.currentTarget); //loop through all options and deselect options that was clicked


          _this.closeAllSelect();
        };
      });
    }, this); // close all select box when clicked outside the box

    document.onclick = function (e) {
      return _this.closeAllSelect();
    };
  }
  /**
   * Update the custom select with data from the native select element
   * @param {Element} el  the target div element
   * @param {Element} sel the native select element
   */


  _createClass(Selectjs, [{
    key: "updateCustomSelect",
    value: function updateCustomSelect(el, sel) {
      var cOption, cOptionImage, cOptionData, selected, ul;
      selected = sel[sel.selectedIndex]; // current option div

      cOption = document.createElement('div');
      cOption.className = 'current-option';
      cOption.setAttribute('aria-hidden', 'true');
      cOption.setAttribute('data-id', selected.getAttribute('data-id'));
      cOption.setAttribute('data-value', selected.value);
      cOptionImage = document.createElement('img');
      cOptionImage.src = selected.getAttribute('data-image');
      cOptionImage.className = 'option-image';
      cOptionData = document.createElement('span');
      cOptionData.className = 'option-data';
      cOptionData.innerText = selected.text;
      cOption.appendChild(cOptionImage);
      cOption.appendChild(cOptionData);
      el.appendChild(cOption); // custom select div

      ul = document.createElement('ul');
      ul.setAttribute('aria-hidden', 'true');
      ul.setAttribute('data-open', 'false');
      ul.className = 'custom-select';
      var options = sel.querySelectorAll('option');
      options.forEach(function (el) {
        var li = document.createElement('li');
        li.className = 'custom-option';
        li.setAttribute('data-id', el.getAttribute('data-id'));
        li.setAttribute('data-value', el.value);

        if (el.getAttribute('data-id') === selected.getAttribute('data-id')) {
          li.setAttribute('data-selected', 'true');
        }

        if (el.hasAttribute('data-image')) {
          var img = document.createElement('img');
          img.src = el.getAttribute('data-image');
          img.className = 'option-image';
          li.appendChild(img);
        }

        var span = document.createElement('span');
        span.className = 'option-data';
        span.innerText = el.text;
        li.appendChild(span);
        ul.appendChild(li);
      }); //@TODO perform keyboard filter search
      //document.onkeydown = e=>{
      //}

      el.appendChild(ul);
    }
    /**
     * Perform select operation
     * @param {Element} el target select div element
     * @param {Element} option clicked custom-option element
     */

  }, {
    key: "select",
    value: function select(el, option) {
      var id = option.getAttribute('data-id');
      var value = option.getAttribute('data-value');
      var nativeSelect = el.querySelector('select');
      var cOption = el.querySelector('.current-option');
      cOption.querySelector('.option-data').textContent = option.querySelector('.option-data').textContent;
      cOption.querySelector('.option-image').src = option.querySelector('.option-image').src;
      cOption.setAttribute('data-id', id);
      nativeSelect.value = value;
      option.setAttribute('data-selected', 'true');
      var options = el.querySelectorAll('.custom-option');
      options.forEach(function (opt) {
        if (opt.getAttribute('data-id') === id) return;
        opt.setAttribute('data-selected', 'false');
      });
    }
  }, {
    key: "toggleSelect",
    value: function toggleSelect(el) {
      //first close all select boxes
      this.closeAllSelect(el); // now toggle current select

      var customSelect = el.querySelector('.custom-select');
      if (!customSelect) return;

      if (customSelect.getAttribute('data-open') === 'false') {
        customSelect.setAttribute('data-open', 'true');
      } else if (customSelect.getAttribute('data-open') === 'true') {
        customSelect.setAttribute('data-open', 'false');
      }

      return this;
    }
  }, {
    key: "closeAllSelect",
    value: function closeAllSelect() {
      var currentEl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.selectDivs.forEach(function (el) {
        if (currentEl && currentEl === el) return;
        var customSelect = el.querySelector('.custom-select');
        if (!customSelect) return;
        customSelect.setAttribute('data-open', 'false');
      });
    }
  }]);

  return Selectjs;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RqcyIsInNlbGVjdERpdnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJuYXRpdmVTZWxlY3QiLCJxdWVyeVNlbGVjdG9yIiwidXBkYXRlQ3VzdG9tU2VsZWN0IiwiY09wdGlvbiIsIm9uY2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlU2VsZWN0Iiwib3B0aW9ucyIsIm9wdGlvbiIsInNlbGVjdCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZUFsbFNlbGVjdCIsInNlbCIsImNPcHRpb25JbWFnZSIsImNPcHRpb25EYXRhIiwic2VsZWN0ZWQiLCJ1bCIsInNlbGVjdGVkSW5kZXgiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzcmMiLCJpbm5lclRleHQiLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJsaSIsImhhc0F0dHJpYnV0ZSIsImltZyIsInNwYW4iLCJpZCIsInRleHRDb250ZW50Iiwib3B0IiwiY3VzdG9tU2VsZWN0IiwiY3VycmVudEVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxROzs7QUFDRixzQkFBYTtBQUFBOztBQUFBOztBQUNULFNBQUtDLFVBQUwsR0FBa0JDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBbEI7QUFFQSxTQUFLRixVQUFMLENBQWdCRyxPQUFoQixDQUF3QixVQUFBQyxFQUFFLEVBQUU7QUFDeEIsVUFBSUMsWUFBWSxHQUFHSixRQUFRLENBQUNLLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBbkI7O0FBQ0EsTUFBQSxLQUFJLENBQUNDLGtCQUFMLENBQXdCSCxFQUF4QixFQUE0QkMsWUFBNUIsRUFGd0IsQ0FJeEI7OztBQUNBLFVBQUlHLE9BQU8sR0FBR0osRUFBRSxDQUFDRSxhQUFILENBQWlCLGlCQUFqQixDQUFkOztBQUNBRSxNQUFBQSxP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QWtDLE9BQWxDO0FBQ0gsT0FIRDtBQUlIOzs7aUNBRVl0QixFLEVBQUc7QUFDWjtBQUNBLFdBQUthLGNBQUwsQ0FBb0JiLEVBQXBCLEVBRlksQ0FJWjs7QUFDQSxVQUFJb0MsWUFBWSxHQUFHcEMsRUFBRSxDQUFDRSxhQUFILENBQWlCLGdCQUFqQixDQUFuQjtBQUNBLFVBQUcsQ0FBQ2tDLFlBQUosRUFBa0I7O0FBQ2xCLFVBQUdBLFlBQVksQ0FBQ2IsWUFBYixDQUEwQixXQUExQixNQUEyQyxPQUE5QyxFQUFzRDtBQUNsRGEsUUFBQUEsWUFBWSxDQUFDZCxZQUFiLENBQTBCLFdBQTFCLEVBQXVDLE1BQXZDO0FBQ0gsT0FGRCxNQUVPLElBQUdjLFlBQVksQ0FBQ2IsWUFBYixDQUEwQixXQUExQixNQUEyQyxNQUE5QyxFQUFxRDtBQUN4RGEsUUFBQUEsWUFBWSxDQUFDZCxZQUFiLENBQTBCLFdBQTFCLEVBQXVDLE9BQXZDO0FBQ0g7O0FBQ0QsYUFBTyxJQUFQO0FBQ0g7OztxQ0FFK0I7QUFBQSxVQUFqQmUsU0FBaUIsdUVBQUwsSUFBSztBQUM1QixXQUFLekMsVUFBTCxDQUFnQkcsT0FBaEIsQ0FBd0IsVUFBQUMsRUFBRSxFQUFFO0FBQ3hCLFlBQUdxQyxTQUFTLElBQUlBLFNBQVMsS0FBS3JDLEVBQTlCLEVBQWtDO0FBQ2xDLFlBQUlvQyxZQUFZLEdBQUdwQyxFQUFFLENBQUNFLGFBQUgsQ0FBaUIsZ0JBQWpCLENBQW5CO0FBQ0EsWUFBRyxDQUFDa0MsWUFBSixFQUFrQjtBQUNsQkEsUUFBQUEsWUFBWSxDQUFDZCxZQUFiLENBQTBCLFdBQTFCLEVBQXVDLE9BQXZDO0FBQ0gsT0FMRDtBQU1IIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VsZWN0anMge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNlbGVjdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0LWpzJyk7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0RGl2cy5mb3JFYWNoKGVsPT57XHJcbiAgICAgICAgICAgIGxldCBuYXRpdmVTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVDdXN0b21TZWxlY3QoZWwsIG5hdGl2ZVNlbGVjdCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhZGQgY2xpY2sgZXZlbnQgdG8gdG9nZ2xlIHNlbGVjdFxyXG4gICAgICAgICAgICBsZXQgY09wdGlvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW9wdGlvbicpO1xyXG4gICAgICAgICAgICBjT3B0aW9uLm9uY2xpY2sgPSAoZSk9PntcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVTZWxlY3QoZWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb249PntcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5vbmNsaWNrID0gZSA9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGVsLCBlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCBvcHRpb25zIGFuZCBkZXNlbGVjdCBvcHRpb25zIHRoYXQgd2FzIGNsaWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsU2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gY2xvc2UgYWxsIHNlbGVjdCBib3ggd2hlbiBjbGlja2VkIG91dHNpZGUgdGhlIGJveFxyXG4gICAgICAgIGRvY3VtZW50Lm9uY2xpY2sgPSAoZSk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2VBbGxTZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGN1c3RvbSBzZWxlY3Qgd2l0aCBkYXRhIGZyb20gdGhlIG5hdGl2ZSBzZWxlY3QgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbCAgdGhlIHRhcmdldCBkaXYgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBzZWwgdGhlIG5hdGl2ZSBzZWxlY3QgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVDdXN0b21TZWxlY3QoZWwsIHNlbCl7XHJcbiAgICAgICAgbGV0IGNPcHRpb24sIGNPcHRpb25JbWFnZSwgY09wdGlvbkRhdGEsIHNlbGVjdGVkLCB1bDtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWQgPSBzZWxbc2VsLnNlbGVjdGVkSW5kZXhdO1xyXG5cclxuICAgICAgICAvLyBjdXJyZW50IG9wdGlvbiBkaXZcclxuICAgICAgICBjT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY09wdGlvbi5jbGFzc05hbWUgPSAnY3VycmVudC1vcHRpb24nO1xyXG4gICAgICAgIGNPcHRpb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgY09wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgICAgY09wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBzZWxlY3RlZC52YWx1ZSk7XHJcblxyXG4gICAgICAgIGNPcHRpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNPcHRpb25JbWFnZS5zcmMgPSBzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnKTtcclxuICAgICAgICBjT3B0aW9uSW1hZ2UuY2xhc3NOYW1lID0gJ29wdGlvbi1pbWFnZSc7XHJcblxyXG4gICAgICAgIGNPcHRpb25EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNPcHRpb25EYXRhLmNsYXNzTmFtZSA9ICdvcHRpb24tZGF0YSc7XHJcbiAgICAgICAgY09wdGlvbkRhdGEuaW5uZXJUZXh0PSBzZWxlY3RlZC50ZXh0O1xyXG5cclxuICAgICAgICBjT3B0aW9uLmFwcGVuZENoaWxkKGNPcHRpb25JbWFnZSk7XHJcbiAgICAgICAgY09wdGlvbi5hcHBlbmRDaGlsZChjT3B0aW9uRGF0YSk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY09wdGlvbik7XHJcblxyXG4gICAgICAgIC8vIGN1c3RvbSBzZWxlY3QgZGl2XHJcbiAgICAgICAgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIHVsLnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgdWwuY2xhc3NOYW1lID0gJ2N1c3RvbS1zZWxlY3QnO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHNlbC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2goZWw9PntcclxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2N1c3RvbS1vcHRpb24nO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGVsLnZhbHVlKTtcclxuICAgICAgICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IHNlbGVjdGVkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnLCd0cnVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZWwuaGFzQXR0cmlidXRlKCdkYXRhLWltYWdlJykpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9ICdvcHRpb24taW1hZ2UnO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSAnb3B0aW9uLWRhdGEnO1xyXG4gICAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9IGVsLnRleHQ7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vQFRPRE8gcGVyZm9ybSBrZXlib2FyZCBmaWx0ZXIgc2VhcmNoXHJcbiAgICAgICAgLy9kb2N1bWVudC5vbmtleWRvd24gPSBlPT57XHJcbiAgICAgICAgLy99XHJcblxyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHVsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gc2VsZWN0IG9wZXJhdGlvblxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbCB0YXJnZXQgc2VsZWN0IGRpdiBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG9wdGlvbiBjbGlja2VkIGN1c3RvbS1vcHRpb24gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBzZWxlY3QoZWwsIG9wdGlvbil7XHJcbiAgICAgICAgbGV0IGlkID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgICAgICBsZXQgbmF0aXZlU2VsZWN0ID0gZWwucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcbiAgICAgICAgbGV0IGNPcHRpb24gPSBlbC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1vcHRpb24nKTtcclxuXHJcbiAgICAgICAgY09wdGlvbi5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWRhdGEnKS50ZXh0Q29udGVudCA9IG9wdGlvbi5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWRhdGEnKS50ZXh0Q29udGVudDtcclxuICAgICAgICBjT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24taW1hZ2UnKS5zcmMgPSBvcHRpb24ucXVlcnlTZWxlY3RvcignLm9wdGlvbi1pbWFnZScpLnNyYztcclxuICAgICAgICBjT3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcclxuICAgICAgICBuYXRpdmVTZWxlY3QudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ3RydWUnKTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHQ9PntcclxuICAgICAgICAgICAgaWYob3B0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBpZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9nZ2xlU2VsZWN0KGVsKXtcclxuICAgICAgICAvL2ZpcnN0IGNsb3NlIGFsbCBzZWxlY3QgYm94ZXNcclxuICAgICAgICB0aGlzLmNsb3NlQWxsU2VsZWN0KGVsKTtcclxuXHJcbiAgICAgICAgLy8gbm93IHRvZ2dsZSBjdXJyZW50IHNlbGVjdFxyXG4gICAgICAgIGxldCBjdXN0b21TZWxlY3QgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdCcpO1xyXG4gICAgICAgIGlmKCFjdXN0b21TZWxlY3QpIHJldHVybjtcclxuICAgICAgICBpZihjdXN0b21TZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nKSA9PT0gJ2ZhbHNlJyl7XHJcbiAgICAgICAgICAgIGN1c3RvbVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicsICd0cnVlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGN1c3RvbVNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicpID09PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICBjdXN0b21TZWxlY3Quc2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBbGxTZWxlY3QoY3VycmVudEVsID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REaXZzLmZvckVhY2goZWw9PntcclxuICAgICAgICAgICAgaWYoY3VycmVudEVsICYmIGN1cnJlbnRFbCA9PT0gZWwpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbVNlbGVjdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIGlmKCFjdXN0b21TZWxlY3QpIHJldHVybjtcclxuICAgICAgICAgICAgY3VzdG9tU2VsZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwiZmlsZSI6InNlbGVjdC5qcyJ9

"use strict";

(function () {
  var selector = new Selectjs();
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzZWxlY3RvciIsIlNlbGVjdGpzIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsWUFBVTtBQUNQLE1BQU1BLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0gsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe1xyXG4gICAgY29uc3Qgc2VsZWN0b3IgPSBuZXcgU2VsZWN0anMoKTtcclxufSkoKSJdLCJmaWxlIjoiYXBwLmpzIn0=
