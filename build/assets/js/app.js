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
    if (!this.selectDivs) return;
    this.selectDivs.forEach(function (el) {
      _this.updateCustomSelect(el); // add click event to toggle select


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
   */


  _createClass(Selectjs, [{
    key: "updateCustomSelect",
    value: function updateCustomSelect(el) {
      var cOption, cOptionImage, cOptionData, selected, ul, sel;
      sel = el.querySelector('select');
      if (!sel) return;
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

      el.appendChild(ul); // scroll to selected option

      var li = ul.querySelector('[data-selected=true]');
      ul.scroll(0, li.offsetTop);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RqcyIsInNlbGVjdERpdnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJ1cGRhdGVDdXN0b21TZWxlY3QiLCJjT3B0aW9uIiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlU2VsZWN0Iiwib3B0aW9ucyIsIm9wdGlvbiIsInNlbGVjdCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZUFsbFNlbGVjdCIsImNPcHRpb25JbWFnZSIsImNPcHRpb25EYXRhIiwic2VsZWN0ZWQiLCJ1bCIsInNlbCIsInNlbGVjdGVkSW5kZXgiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzcmMiLCJpbm5lclRleHQiLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJsaSIsImhhc0F0dHJpYnV0ZSIsImltZyIsInNwYW4iLCJzY3JvbGwiLCJvZmZzZXRUb3AiLCJpZCIsIm5hdGl2ZVNlbGVjdCIsInRleHRDb250ZW50Iiwib3B0IiwiY3VzdG9tU2VsZWN0IiwiY3VycmVudEVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxROzs7QUFDRixzQkFBYTtBQUFBOztBQUFBOztBQUNULFNBQUtDLFVBQUwsR0FBa0JDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBbEI7QUFDQSxRQUFHLENBQUMsS0FBS0YsVUFBVCxFQUFxQjtBQUNyQixTQUFLQSxVQUFMLENBQWdCRyxPQUFoQixDQUF3QixVQUFBQyxFQUFFLEVBQUU7QUFDeEIsTUFBQSxLQUFJLENBQUNDLGtCQUFMLENBQXdCRCxFQUF4QixFQUR3QixDQUd4Qjs7O0FBQ0EsVUFBSUUsT0FBTyxHQUFHRixFQUFFLENBQUNHLGFBQUgsQ0FBaUIsaUJBQWpCLENBQWQ7O0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0UsT0FBUixH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QUEwQixXQUExQixFQUF1QyxPQUF2QztBQUNILE9BTEQ7QUFNSCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlbGVjdGpzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC1qcycpO1xyXG4gICAgICAgIGlmKCF0aGlzLnNlbGVjdERpdnMpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNlbGVjdERpdnMuZm9yRWFjaChlbD0+e1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1c3RvbVNlbGVjdChlbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhZGQgY2xpY2sgZXZlbnQgdG8gdG9nZ2xlIHNlbGVjdFxyXG4gICAgICAgICAgICBsZXQgY09wdGlvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW9wdGlvbicpO1xyXG4gICAgICAgICAgICBjT3B0aW9uLm9uY2xpY2sgPSAoZSk9PntcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVTZWxlY3QoZWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb249PntcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5vbmNsaWNrID0gZSA9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGVsLCBlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCBvcHRpb25zIGFuZCBkZXNlbGVjdCBvcHRpb25zIHRoYXQgd2FzIGNsaWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsU2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gY2xvc2UgYWxsIHNlbGVjdCBib3ggd2hlbiBjbGlja2VkIG91dHNpZGUgdGhlIGJveFxyXG4gICAgICAgIGRvY3VtZW50Lm9uY2xpY2sgPSAoZSk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2VBbGxTZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGN1c3RvbSBzZWxlY3Qgd2l0aCBkYXRhIGZyb20gdGhlIG5hdGl2ZSBzZWxlY3QgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbCAgdGhlIHRhcmdldCBkaXYgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVDdXN0b21TZWxlY3QoZWwpe1xyXG4gICAgICAgIGxldCBjT3B0aW9uLCBjT3B0aW9uSW1hZ2UsIGNPcHRpb25EYXRhLCBzZWxlY3RlZCwgdWwsIHNlbDtcclxuICAgICAgICBcclxuICAgICAgICBzZWwgPSBlbC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICBpZighc2VsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNlbGVjdGVkID0gc2VsW3NlbC5zZWxlY3RlZEluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gY3VycmVudCBvcHRpb24gZGl2XHJcbiAgICAgICAgY09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNPcHRpb24uY2xhc3NOYW1lID0gJ2N1cnJlbnQtb3B0aW9uJztcclxuICAgICAgICBjT3B0aW9uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIGNPcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICAgIGNPcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgc2VsZWN0ZWQudmFsdWUpO1xyXG5cclxuICAgICAgICBjT3B0aW9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjT3B0aW9uSW1hZ2Uuc3JjID0gc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJyk7XHJcbiAgICAgICAgY09wdGlvbkltYWdlLmNsYXNzTmFtZSA9ICdvcHRpb24taW1hZ2UnO1xyXG5cclxuICAgICAgICBjT3B0aW9uRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjT3B0aW9uRGF0YS5jbGFzc05hbWUgPSAnb3B0aW9uLWRhdGEnO1xyXG4gICAgICAgIGNPcHRpb25EYXRhLmlubmVyVGV4dD0gc2VsZWN0ZWQudGV4dDtcclxuXHJcbiAgICAgICAgY09wdGlvbi5hcHBlbmRDaGlsZChjT3B0aW9uSW1hZ2UpO1xyXG4gICAgICAgIGNPcHRpb24uYXBwZW5kQ2hpbGQoY09wdGlvbkRhdGEpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGNPcHRpb24pO1xyXG5cclxuICAgICAgICAvLyBjdXN0b20gc2VsZWN0IGRpdlxyXG4gICAgICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB1bC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICB1bC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicsICdmYWxzZScpO1xyXG4gICAgICAgIHVsLmNsYXNzTmFtZSA9ICdjdXN0b20tc2VsZWN0JztcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBzZWwucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGVsPT57XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9ICdjdXN0b20tb3B0aW9uJztcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBlbC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywndHJ1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1pbWFnZScpKXtcclxuICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSAnb3B0aW9uLWltYWdlJztcclxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gJ29wdGlvbi1kYXRhJztcclxuICAgICAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBlbC50ZXh0O1xyXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9AVE9ETyBwZXJmb3JtIGtleWJvYXJkIGZpbHRlciBzZWFyY2hcclxuICAgICAgICAvL2RvY3VtZW50Lm9ua2V5ZG93biA9IGU9PntcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgICAgICAvLyBzY3JvbGwgdG8gc2VsZWN0ZWQgb3B0aW9uXHJcbiAgICAgICAgbGV0IGxpID0gdWwucXVlcnlTZWxlY3RvcignW2RhdGEtc2VsZWN0ZWQ9dHJ1ZV0nKTtcclxuICAgICAgICB1bC5zY3JvbGwoMCwgbGkub2Zmc2V0VG9wKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gc2VsZWN0IG9wZXJhdGlvblxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbCB0YXJnZXQgc2VsZWN0IGRpdiBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG9wdGlvbiBjbGlja2VkIGN1c3RvbS1vcHRpb24gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBzZWxlY3QoZWwsIG9wdGlvbil7XHJcbiAgICAgICAgbGV0IGlkID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgICAgICBsZXQgbmF0aXZlU2VsZWN0ID0gZWwucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcbiAgICAgICAgbGV0IGNPcHRpb24gPSBlbC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1vcHRpb24nKTtcclxuXHJcbiAgICAgICAgY09wdGlvbi5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWRhdGEnKS50ZXh0Q29udGVudCA9IG9wdGlvbi5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWRhdGEnKS50ZXh0Q29udGVudDtcclxuICAgICAgICBjT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24taW1hZ2UnKS5zcmMgPSBvcHRpb24ucXVlcnlTZWxlY3RvcignLm9wdGlvbi1pbWFnZScpLnNyYztcclxuICAgICAgICBjT3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcclxuICAgICAgICBuYXRpdmVTZWxlY3QudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ3RydWUnKTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHQ9PntcclxuICAgICAgICAgICAgaWYob3B0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBpZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9nZ2xlU2VsZWN0KGVsKXtcclxuICAgICAgICAvL2ZpcnN0IGNsb3NlIGFsbCBzZWxlY3QgYm94ZXNcclxuICAgICAgICB0aGlzLmNsb3NlQWxsU2VsZWN0KGVsKTtcclxuXHJcbiAgICAgICAgLy8gbm93IHRvZ2dsZSBjdXJyZW50IHNlbGVjdFxyXG4gICAgICAgIGxldCBjdXN0b21TZWxlY3QgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdCcpO1xyXG4gICAgICAgIGlmKCFjdXN0b21TZWxlY3QpIHJldHVybjtcclxuICAgICAgICBpZihjdXN0b21TZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nKSA9PT0gJ2ZhbHNlJyl7XHJcbiAgICAgICAgICAgIGN1c3RvbVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicsICd0cnVlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGN1c3RvbVNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicpID09PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICBjdXN0b21TZWxlY3Quc2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBbGxTZWxlY3QoY3VycmVudEVsID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REaXZzLmZvckVhY2goZWw9PntcclxuICAgICAgICAgICAgaWYoY3VycmVudEVsICYmIGN1cnJlbnRFbCA9PT0gZWwpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbVNlbGVjdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIGlmKCFjdXN0b21TZWxlY3QpIHJldHVybjtcclxuICAgICAgICAgICAgY3VzdG9tU2VsZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwiZmlsZSI6InNlbGVjdC5qcyJ9

"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Control =
/*#__PURE__*/
function () {
  function Control() {
    var _this = this;

    _classCallCheck(this, Control);

    this.locale = 'en-US';
    this.formatterOpts = {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    };
    this.buttons = document.querySelectorAll('.controls button[data-button]');
    this.box = document.querySelector('form input[name=amount]+span[data-value]');
    this.amount = document.querySelector('form input[name=amount]');
    this.buttons.forEach(function (button) {
      button.onclick = function (e) {
        e.stopPropagation();
        e.preventDefault();
        var data = button.getAttribute('data-button');

        if (data.match(/^[0-9]|\.$/)) {
          return _this.input(data);
        }

        switch (data) {
          case 'clear':
            _this.clear();

            break;

          case 'swap':
            _this.swap();

            break;

          case 'share':
            _this.share();

            break;

          case 'backspace':
            _this.backSpace();

            break;

          case 'menu':
            _this.menu();

            break;
        }
      };
    });
  }

  _createClass(Control, [{
    key: "input",
    value: function input(value) {
      //@TODO: notify error when maximumFraction value is reached
      //@TODO: notify error when maximum number of digits is reached
      var digitSize = this.formatDigitSize(this.amount.value);
      this.updateBox(value, digitSize);

      if (this.amount.value != '0') {
        this.amount.value += value;
      } else {
        this.amount.value = value;
      }
    }
  }, {
    key: "updateBox",
    value: function updateBox(value, digitSize) {
      var dataValue = this.box.getAttribute('data-value');

      if (dataValue != '0') {
        this.box.setAttribute('data-value', dataValue + value);
        this.box.innerText = new Intl.NumberFormat(this.locale, this.formatterOpts).format(dataValue + value);
      } else {
        this.box.setAttribute('data-value', value);
        this.box.innerText = new Intl.NumberFormat(this.locale, this.formatterOpts).format(value);
      }

      this.box.setAttribute('data-size', digitSize);
    }
  }, {
    key: "clear",
    value: function clear() {
      this.amount.value = '0';
      var digitSize = this.formatDigitSize(this.amount.value);
      this.box.setAttribute('data-value', '0');
      this.box.innerText = '0';
      this.box.setAttribute('data-size', digitSize);
    }
  }, {
    key: "swap",
    value: function swap() {//@todo: swap feature
    }
  }, {
    key: "share",
    value: function share() {
      if (navigator.share) {
        navigator.share({
          title: 'Currency Converter',
          text: 'convert between currencies',
          href: window.location.href
        }).then(function () {//@todo: show thank you message toast
        })["catch"](function (err) {//@todo: show error sharing app message toast
        });
      } else {
        return this.customShare();
      }
    }
  }, {
    key: "customShare",
    value: function customShare() {}
  }, {
    key: "backSpace",
    value: function backSpace() {
      if (this.amount.value != '0') {
        this.amount.value = this.amount.value.slice(0, -1) == '' ? '0' : this.amount.value.slice(0, -1);
        var digitSize = this.formatDigitSize(this.amount.value);
        this.box.setAttribute('data-value', this.amount.value);
        this.box.innerText = new Intl.NumberFormat(this.locale, this.formatterOpts).format(this.amount.value);
        this.box.setAttribute('data-size', digitSize);
      }
    }
  }, {
    key: "menu",
    value: function menu() {}
  }, {
    key: "formatDigitSize",
    value: function formatDigitSize(value) {
      var digitSize = 'normal';

      if (value.length <= 9) {
        digitSize = 'normal';
      } else if (value.length <= 12) {
        digitSize = 'small';
      } else if (value.length <= 18) {
        digitSize = 'smaller';
      } else {
        //@TODO: notify error with a snackbar
        return alert('maximum number of digits reached');
      }

      return digitSize;
    }
  }]);

  return Control;
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2wuanMiXSwibmFtZXMiOlsiQ29udHJvbCIsImxvY2FsZSIsImZvcm1hdHRlck9wdHMiLCJzdHlsZSIsIm1pbmltdW1GcmFjdGlvbkRpZ2l0cyIsIm1heGltdW1GcmFjdGlvbkRpZ2l0cyIsImJ1dHRvbnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib3giLCJxdWVyeVNlbGVjdG9yIiwiYW1vdW50IiwiZm9yRWFjaCIsImJ1dHRvbiIsIm9uY2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZ2V0QXR0cmlidXRlIiwibWF0Y2giLCJpbnB1dCIsImNsZWFyIiwic3dhcCIsInNoYXJlIiwiYmFja1NwYWNlIiwibWVudSIsInZhbHVlIiwiZGlnaXRTaXplIiwiZm9ybWF0RGlnaXRTaXplIiwidXBkYXRlQm94IiwiZGF0YVZhbHVlIiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsIm5hdmlnYXRvciIsInRpdGxlIiwidGV4dCIsImhyZWYiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInRoZW4iLCJlcnIiLCJjdXN0b21TaGFyZSIsInNsaWNlIiwibGVuZ3RoIiwiYWxlcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQU1BLE87OztBQUVGLHFCQUFhO0FBQUE7O0FBQUE7O0FBQ1QsU0FBS0MsTUFBTCxHQUFjLE9BQWQ7QUFDQSxTQUFLQyxhQUFMLEdBQXFCO0FBQ2pCQyxNQUFBQSxLQUFLLEVBQUUsU0FEVTtBQUVqQkMsTUFBQUEscUJBQXFCLEVBQUUsQ0FGTjtBQUdqQkMsTUFBQUEscUJBQXFCLEVBQUU7QUFITixLQUFyQjtBQUtBLFNBQUtDLE9BQUwsR0FBZUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQiwrQkFBMUIsQ0FBZjtBQUNBLFNBQUtDLEdBQUwsR0FBV0YsUUFBUSxDQUFDRyxhQUFULENBQXVCLDBDQUF2QixDQUFYO0FBQ0EsU0FB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O0FBQ0EsYUFBS2xCLEdBQUwsQ0FBU3VCLFlBQVQsQ0FBc0IsV0FBdEIsRUFBbUNKLFNBQW5DO0FBQ0g7QUFDSjs7OzJCQUVLLENBQUU7OztvQ0FHUUQsSyxFQUFNO0FBQ2xCLFVBQUlDLFNBQVMsR0FBRyxRQUFoQjs7QUFDQSxVQUFHRCxLQUFLLENBQUNvQixNQUFOLElBQWdCLENBQW5CLEVBQXFCO0FBQ2pCbkIsUUFBQUEsU0FBUyxHQUFHLFFBQVo7QUFDSCxPQUZELE1BRU8sSUFBR0QsS0FBSyxDQUFDb0IsTUFBTixJQUFnQixFQUFuQixFQUFzQjtBQUN6Qm5CLFFBQUFBLFNBQVMsR0FBRyxPQUFaO0FBQ0gsT0FGTSxNQUVBLElBQUdELEtBQUssQ0FBQ29CLE1BQU4sSUFBZ0IsRUFBbkIsRUFBdUI7QUFDMUJuQixRQUFBQSxTQUFTLEdBQUcsU0FBWjtBQUNILE9BRk0sTUFFQTtBQUNIO0FBQ0EsZUFBT29CLEtBQUssQ0FBQyxrQ0FBRCxDQUFaO0FBQ0g7O0FBQ0QsYUFBT3BCLFNBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENvbnRyb2wge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5sb2NhbGUgPSAnZW4tVVMnO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0dGVyT3B0cyA9IHtcclxuICAgICAgICAgICAgc3R5bGU6ICdkZWNpbWFsJyxcclxuICAgICAgICAgICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IDZcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jb250cm9scyBidXR0b25bZGF0YS1idXR0b25dJyk7XHJcbiAgICAgICAgdGhpcy5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIGlucHV0W25hbWU9YW1vdW50XStzcGFuW2RhdGEtdmFsdWVdJyk7XHJcbiAgICAgICAgdGhpcy5hbW91bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtIGlucHV0W25hbWU9YW1vdW50XScpO1xyXG5cclxuICAgICAgICB0aGlzLmJ1dHRvbnMuZm9yRWFjaChidXR0b249PntcclxuICAgICAgICAgICAgYnV0dG9uLm9uY2xpY2sgPSBlID0+e1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1idXR0b24nKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEubWF0Y2goL15bMC05XXxcXC4kLykpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmlucHV0KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoKGRhdGEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NsZWFyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N3YXAnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN3YXAoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdzaGFyZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdiYWNrc3BhY2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJhY2tTcGFjZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ21lbnUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnUoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0KHZhbHVlKXtcclxuICAgICAgICAvL0BUT0RPOiBub3RpZnkgZXJyb3Igd2hlbiBtYXhpbXVtRnJhY3Rpb24gdmFsdWUgaXMgcmVhY2hlZFxyXG5cclxuICAgICAgICAvL0BUT0RPOiBub3RpZnkgZXJyb3Igd2hlbiBtYXhpbXVtIG51bWJlciBvZiBkaWdpdHMgaXMgcmVhY2hlZFxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBkaWdpdFNpemUgPSB0aGlzLmZvcm1hdERpZ2l0U2l6ZSh0aGlzLmFtb3VudC52YWx1ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVCb3godmFsdWUsIGRpZ2l0U2l6ZSk7XHJcbiAgICAgICAgaWYodGhpcy5hbW91bnQudmFsdWUgIT0gJzAnKXtcclxuICAgICAgICAgICAgdGhpcy5hbW91bnQudmFsdWUgKz0gdmFsdWVcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFtb3VudC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVCb3godmFsdWUsIGRpZ2l0U2l6ZSl7XHJcbiAgICAgICAgY29uc3QgZGF0YVZhbHVlID0gdGhpcy5ib3guZ2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJyk7XHJcbiAgICAgICAgaWYoZGF0YVZhbHVlICE9ICcwJyl7XHJcbiAgICAgICAgICAgIHRoaXMuYm94LnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGRhdGFWYWx1ZSArIHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5ib3guaW5uZXJUZXh0ID0gbmV3IEludGwuTnVtYmVyRm9ybWF0KHRoaXMubG9jYWxlLCB0aGlzLmZvcm1hdHRlck9wdHMpLmZvcm1hdChkYXRhVmFsdWUgKyB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5ib3guc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmJveC5pbm5lclRleHQgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQodGhpcy5sb2NhbGUsIHRoaXMuZm9ybWF0dGVyT3B0cykuZm9ybWF0KHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ib3guc2V0QXR0cmlidXRlKCdkYXRhLXNpemUnLCBkaWdpdFNpemUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCl7XHJcbiAgICAgICAgdGhpcy5hbW91bnQudmFsdWUgPSAnMCc7XHJcbiAgICAgICAgbGV0IGRpZ2l0U2l6ZSA9IHRoaXMuZm9ybWF0RGlnaXRTaXplKHRoaXMuYW1vdW50LnZhbHVlKTtcclxuICAgICAgICB0aGlzLmJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCAnMCcpO1xyXG4gICAgICAgIHRoaXMuYm94LmlubmVyVGV4dCA9ICcwJztcclxuICAgICAgICB0aGlzLmJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScsIGRpZ2l0U2l6ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3dhcCgpe1xyXG4gICAgICAgIC8vQHRvZG86IHN3YXAgZmVhdHVyZVxyXG4gICAgfVxyXG5cclxuICAgIHNoYXJlKCl7XHJcbiAgICAgICAgaWYobmF2aWdhdG9yLnNoYXJlKXtcclxuICAgICAgICAgICAgbmF2aWdhdG9yLnNoYXJlKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ3VycmVuY3kgQ29udmVydGVyJyxcclxuICAgICAgICAgICAgICAgIHRleHQ6ICdjb252ZXJ0IGJldHdlZW4gY3VycmVuY2llcycsXHJcbiAgICAgICAgICAgICAgICBocmVmOiB3aW5kb3cubG9jYXRpb24uaHJlZlxyXG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XHJcbiAgICAgICAgICAgICAgICAvL0B0b2RvOiBzaG93IHRoYW5rIHlvdSBtZXNzYWdlIHRvYXN0XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICAgICAgLy9AdG9kbzogc2hvdyBlcnJvciBzaGFyaW5nIGFwcCBtZXNzYWdlIHRvYXN0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3VzdG9tU2hhcmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY3VzdG9tU2hhcmUoKXt9XHJcblxyXG4gICAgYmFja1NwYWNlKCl7XHJcbiAgICAgICAgaWYodGhpcy5hbW91bnQudmFsdWUgIT0gJzAnKXtcclxuICAgICAgICAgICAgdGhpcy5hbW91bnQudmFsdWUgPSB0aGlzLmFtb3VudC52YWx1ZS5zbGljZSgwLC0xKSA9PSAnJyA/ICcwJyA6IHRoaXMuYW1vdW50LnZhbHVlLnNsaWNlKDAsLTEpO1xyXG4gICAgICAgICAgICBsZXQgZGlnaXRTaXplID0gdGhpcy5mb3JtYXREaWdpdFNpemUodGhpcy5hbW91bnQudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCB0aGlzLmFtb3VudC52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYm94LmlubmVyVGV4dCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSwgdGhpcy5mb3JtYXR0ZXJPcHRzKS5mb3JtYXQodGhpcy5hbW91bnQudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmJveC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2l6ZScsIGRpZ2l0U2l6ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1lbnUoKXt9XHJcblxyXG5cclxuICAgIGZvcm1hdERpZ2l0U2l6ZSh2YWx1ZSl7XHJcbiAgICAgICAgbGV0IGRpZ2l0U2l6ZSA9ICdub3JtYWwnO1xyXG4gICAgICAgIGlmKHZhbHVlLmxlbmd0aCA8PSA5KXtcclxuICAgICAgICAgICAgZGlnaXRTaXplID0gJ25vcm1hbCdcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUubGVuZ3RoIDw9IDEyKXtcclxuICAgICAgICAgICAgZGlnaXRTaXplID0gJ3NtYWxsJztcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUubGVuZ3RoIDw9IDE4KSB7XHJcbiAgICAgICAgICAgIGRpZ2l0U2l6ZSA9ICdzbWFsbGVyJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvL0BUT0RPOiBub3RpZnkgZXJyb3Igd2l0aCBhIHNuYWNrYmFyXHJcbiAgICAgICAgICAgIHJldHVybiBhbGVydCgnbWF4aW11bSBudW1iZXIgb2YgZGlnaXRzIHJlYWNoZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpZ2l0U2l6ZTtcclxuICAgIH1cclxufSJdLCJmaWxlIjoiY29udHJvbC5qcyJ9

"use strict";

var key = '83f45781b9cd2d13dd16';
var api = 'https://free.currconv.com/api/v7';
var form = document.querySelector('#screen-form');
var selTo = form.querySelector('select[name=countries-to]');
var selFrom = form.querySelector('select[name=countries-from]');
var input = form.querySelector('input[name=amount]');
var result = document.querySelector('#result');
var rate = document.querySelector('#rate');
var image = './assets/imgs/flags';
var locale = 'en-US';
var formatterOpts = {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 6
};

function updateResult(total) {
  var r = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  total = new Intl.NumberFormat(locale, formatterOpts).format(total);
  result.setAttribute('data-result', total);
  result.innerText = total;

  if (r) {
    rate.innerText = "".concat(r.toFixed(), " ").concat(selFrom.value, " per ").concat(selTo.value);
  } else {
    rate.innerText = '';
  }
}

function convertCurrency() {
  var from = selFrom.value.toUpperCase();
  var to = selTo.value.toUpperCase();
  var amount = input.value;
  var rate, total;

  if (amount > 0) {
    var convert = fetch("".concat(api, "/convert?apiKey=").concat(key, "&q=").concat(from, "_").concat(to, "&compact=ultra")); //start spinner

    convert.then(function (result) {
      return result.json();
    }).then(function (data) {
      rate = data["".concat(from, "_").concat(to)];
      total = amount * rate;
      updateResult(total, rate);
    })["catch"](function (err) {
      console.log(error);
    })["finally"](function () {// stop spinner
    });
  } else {
    console.log('amount is less than zero');
    updateResult(0);
  }
}

function getCurrencies() {
  // load all currencies
  var getCurrencies = fetch("".concat(api, "/currencies?apiKey=").concat(key));
  getCurrencies.then(function (response) {
    return response.json();
  }).then(function (currencies) {
    // store the currencies in an array so we can sort it alphabetically
    var arr = Object.keys(currencies.results);
    arr = arr.sort();
    var id = 0;
    var selIndex = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _key = _step.value;
        var currency = currencies.results[_key];
        var option = document.createElement('option');
        option.value = currency.id.toLowerCase();
        option.setAttribute('data-id', ++id);
        option.setAttribute('data-image', "".concat(image, "/").concat(currency.id.toLowerCase(), ".png"));
        option.text = currency.id;
        selTo.appendChild(option); // use usd as selected index

        if (currency.id == 'USD') {
          selIndex = id - 1;
          selTo.selectedIndex = selIndex;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return currencies;
  }).then(function (currencies) {
    var arr = Object.keys(currencies.results);
    arr = arr.sort();
    var id = 0;
    var selIndex = 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = arr[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var _key2 = _step2.value;
        var currency = currencies.results[_key2];
        var option = document.createElement('option');
        option.value = currency.id.toLowerCase();
        option.setAttribute('data-id', ++id);
        option.setAttribute('data-image', "".concat(image, "/").concat(currency.id.toLowerCase(), ".png"));
        option.text = currency.id;
        selFrom.appendChild(option); // use usd as selected index

        if (currency.id == 'GBP') {
          selIndex = id - 1;
          selFrom.selectedIndex = selIndex;
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return;
  }).then(function () {
    return new Selectjs();
  })["catch"](function (err) {
    console.log(err);
  });
}

;
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnRlci5qcyJdLCJuYW1lcyI6WyJrZXkiLCJhcGkiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsVG8iLCJzZWxGcm9tIiwiaW5wdXQiLCJyZXN1bHQiLCJyYXRlIiwiaW1hZ2UiLCJsb2NhbGUiLCJmb3JtYXR0ZXJPcHRzIiwic3R5bGUiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJ1cGRhdGVSZXN1bHQiLCJ0b3RhbCIsInIiLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0Iiwic2V0QXR0cmlidXRlIiwiaW5uZXJUZXh0IiwidG9GaXhlZCIsInZhbHVlIiwiY29udmVydEN1cnJlbmN5IiwiZnJvbSIsInRvVXBwZXJDYXNlIiwidG8iLCJhbW91bnQiLCJjb252ZXJ0IiwiZmV0Y2giLCJ0aGVuIiwianNvbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJnZXRDdXJyZW5jaWVzIiwicmVzcG9uc2UiLCJjdXJyZW5jaWVzIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInJlc3VsdHMiLCJzb3J0IiwiaWQiLCJzZWxJbmRleCIsImN1cnJlbmN5Iiwib3B0aW9uIiwiY3JlYXRlRWxlbWVudCIsInRvTG93ZXJDYXNlIiwidGV4dCIsImFwcGVuZENoaWxkIiwic2VsZWN0ZWRJbmRleCIsIlNlbGVjdGpzIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLEdBQUcsR0FBRyxzQkFBWjtBQUNBLElBQU1DLEdBQUcsR0FBRyxrQ0FBWjtBQUNBLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQWI7QUFDQSxJQUFNQyxLQUFLLEdBQUdILElBQUksQ0FBQ0UsYUFBTCxDQUFtQiwyQkFBbkIsQ0FBZDtBQUNBLElBQU1FLE9BQU8sR0FBR0osSUFBSSxDQUFDRSxhQUFMLENBQW1CLDZCQUFuQixDQUFoQjtBQUNBLElBQU1HLEtBQUssR0FB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQW1CaEI7QUFDSCxHQTVDRCxFQTRDR2hCLElBNUNILENBNENRLFlBQUk7QUFDUixXQUFPLElBQUl3QixRQUFKLEVBQVA7QUFDSCxHQTlDRCxXQThDUyxVQUFBckIsR0FBRyxFQUFFO0FBQ1ZDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0gsR0FoREQ7QUFpREg7O0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBrZXkgPSAnODNmNDU3ODFiOWNkMmQxM2RkMTYnO1xyXG5jb25zdCBhcGkgPSAnaHR0cHM6Ly9mcmVlLmN1cnJjb252LmNvbS9hcGkvdjcnO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NjcmVlbi1mb3JtJyk7XHJcbmNvbnN0IHNlbFRvID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1jb3VudHJpZXMtdG9dJyk7XHJcbmNvbnN0IHNlbEZyb20gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdFtuYW1lPWNvdW50cmllcy1mcm9tXScpO1xyXG5jb25zdCBpbnB1dCA9IGZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1hbW91bnRdJyk7XHJcbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN1bHQnKTtcclxuY29uc3QgcmF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyYXRlJyk7XHJcbmNvbnN0IGltYWdlID0gJy4vYXNzZXRzL2ltZ3MvZmxhZ3MnO1xyXG5jb25zdCBsb2NhbGUgPSAnZW4tVVMnO1xyXG5jb25zdCBmb3JtYXR0ZXJPcHRzID0ge1xyXG4gICAgc3R5bGU6ICdkZWNpbWFsJyxcclxuICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogMixcclxuICAgIG1heGltdW1GcmFjdGlvbkRpZ2l0czogNlxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlUmVzdWx0KHRvdGFsLCByPW51bGwpe1xyXG4gICAgdG90YWwgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlLCBmb3JtYXR0ZXJPcHRzKS5mb3JtYXQodG90YWwpO1xyXG4gICAgcmVzdWx0LnNldEF0dHJpYnV0ZSgnZGF0YS1yZXN1bHQnLCB0b3RhbCk7XHJcbiAgICByZXN1bHQuaW5uZXJUZXh0ID0gdG90YWw7XHJcbiAgICBpZihyKXtcclxuICAgICAgICByYXRlLmlubmVyVGV4dCA9IGAke3IudG9GaXhlZCgpfSAke3NlbEZyb20udmFsdWV9IHBlciAke3NlbFRvLnZhbHVlfWA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJhdGUuaW5uZXJUZXh0ID0gJyc7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnZlcnRDdXJyZW5jeSgpe1xyXG4gICAgbGV0IGZyb20gPSBzZWxGcm9tLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBsZXQgdG8gPSBzZWxUby52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGFtb3VudCA9IGlucHV0LnZhbHVlO1xyXG4gICAgbGV0IHJhdGUsIHRvdGFsO1xyXG4gICAgaWYoYW1vdW50ID4gMCl7XHJcbiAgICAgICAgY29uc3QgY29udmVydCA9IGZldGNoKGAke2FwaX0vY29udmVydD9hcGlLZXk9JHtrZXl9JnE9JHtmcm9tfV8ke3RvfSZjb21wYWN0PXVsdHJhYCk7XHJcbiAgICAgICAgLy9zdGFydCBzcGlubmVyXHJcbiAgICAgICAgY29udmVydC50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Lmpzb24oKTtcclxuICAgICAgICB9KS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgcmF0ZSA9IGRhdGFbYCR7ZnJvbX1fJHt0b31gXTtcclxuICAgICAgICAgICAgdG90YWwgPSBhbW91bnQgKiByYXRlO1xyXG4gICAgICAgICAgICB1cGRhdGVSZXN1bHQodG90YWwsIHJhdGUpO1xyXG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgICAgfSkuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICAvLyBzdG9wIHNwaW5uZXJcclxuICAgICAgICB9KVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYW1vdW50IGlzIGxlc3MgdGhhbiB6ZXJvJyk7XHJcbiAgICAgICAgdXBkYXRlUmVzdWx0KDApO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDdXJyZW5jaWVzKCl7XHJcblxyXG4gICAgLy8gbG9hZCBhbGwgY3VycmVuY2llc1xyXG4gICAgY29uc3QgZ2V0Q3VycmVuY2llcyA9IGZldGNoKGAke2FwaX0vY3VycmVuY2llcz9hcGlLZXk9JHtrZXl9YCk7XHJcbiAgICBnZXRDdXJyZW5jaWVzLnRoZW4ocmVzcG9uc2U9PntcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSkudGhlbihjdXJyZW5jaWVzPT57XHJcblxyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBjdXJyZW5jaWVzIGluIGFuIGFycmF5IHNvIHdlIGNhbiBzb3J0IGl0IGFscGhhYmV0aWNhbGx5XHJcbiAgICAgICAgbGV0IGFyciA9IE9iamVjdC5rZXlzKGN1cnJlbmNpZXMucmVzdWx0cyk7XHJcbiAgICAgICAgYXJyID0gYXJyLnNvcnQoKTtcclxuICAgICAgICBsZXQgaWQgPSAwO1xyXG4gICAgICAgIGxldCBzZWxJbmRleCA9IDA7XHJcbiAgICAgICAgZm9yKGxldCBrZXkgb2YgYXJyKXtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbmN5ID0gY3VycmVuY2llcy5yZXN1bHRzW2tleV07XHJcbiAgICAgICAgICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gY3VycmVuY3kuaWQudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsICsraWQpO1xyXG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJywgYCR7aW1hZ2V9LyR7Y3VycmVuY3kuaWQudG9Mb3dlckNhc2UoKX0ucG5nYCk7XHJcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0ID0gY3VycmVuY3kuaWQ7XHJcbiAgICAgICAgICAgIHNlbFRvLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIC8vIHVzZSB1c2QgYXMgc2VsZWN0ZWQgaW5kZXhcclxuICAgICAgICAgICAgaWYoY3VycmVuY3kuaWQgPT0gJ1VTRCcpe1xyXG4gICAgICAgICAgICAgICAgc2VsSW5kZXggPSBpZCAtIDE7XHJcbiAgICAgICAgICAgICAgICBzZWxUby5zZWxlY3RlZEluZGV4ID0gc2VsSW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGN1cnJlbmNpZXM7XHJcbiAgICB9KS50aGVuKGN1cnJlbmNpZXM9PntcclxuICAgICAgICBsZXQgYXJyID0gT2JqZWN0LmtleXMoY3VycmVuY2llcy5yZXN1bHRzKTtcclxuICAgICAgICBhcnIgPSBhcnIuc29ydCgpO1xyXG4gICAgICAgIGxldCBpZCA9IDA7XHJcbiAgICAgICAgbGV0IHNlbEluZGV4ID0gMDtcclxuICAgICAgICBmb3IobGV0IGtleSBvZiBhcnIpe1xyXG4gICAgICAgICAgICBsZXQgY3VycmVuY3kgPSBjdXJyZW5jaWVzLnJlc3VsdHNba2V5XTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBjdXJyZW5jeS5pZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgKytpZCk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnLCBgJHtpbWFnZX0vJHtjdXJyZW5jeS5pZC50b0xvd2VyQ2FzZSgpfS5wbmdgKTtcclxuICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBjdXJyZW5jeS5pZDtcclxuICAgICAgICAgICAgc2VsRnJvbS5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgICAgICAgICAvLyB1c2UgdXNkIGFzIHNlbGVjdGVkIGluZGV4XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbmN5LmlkID09ICdHQlAnKXtcclxuICAgICAgICAgICAgICAgIHNlbEluZGV4ID0gaWQgLSAxO1xyXG4gICAgICAgICAgICAgICAgc2VsRnJvbS5zZWxlY3RlZEluZGV4ID0gc2VsSW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSkudGhlbigoKT0+e1xyXG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0anMoKTtcclxuICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICB9KTtcclxufTsiXSwiZmlsZSI6ImNvbnZlcnRlci5qcyJ9

"use strict";

document.addEventListener('DOMContentLoaded', function () {
  getCurrencies(); // update the selector with currencies from the api
  // add event listenter to convert currency when button is clicked

  var buttons = document.querySelectorAll('.controls button[data-button]');
  new Control(); // set up the control buttons

  buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      var data = button.getAttribute('data-button');

      if (data.match(/^[0-9]|\.|clear|backspace$/)) {
        convertCurrency();
      }
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRDdXJyZW5jaWVzIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJDb250cm9sIiwiZm9yRWFjaCIsImJ1dHRvbiIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJnZXRBdHRyaWJ1dGUiLCJtYXRjaCIsImNvbnZlcnRDdXJyZW5jeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVTtBQUNwREMsRUFBQUEsYUFBYSxHQUR1QyxDQUNuQztBQUVqQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ0ksZ0JBQVQsQ0FBMEIsK0JBQTFCLENBQWhCO0FBRUEsTUFBSUMsT0FBSixHQU5vRCxDQU1yQzs7QUFFZkYsRUFBQUEsT0FBTyxDQUFDRyxPQUFSLENBQWdCLFVBQUFDLE1BQU0sRUFBRTtBQUNwQkEsSUFBQUEsTUFBTSxDQUFDTixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFBTyxDQUFDLEVBQUc7QUFDakNBLE1BQUFBLENBQUMsQ0FBQ0MsZUFBRjtBQUNBRCxNQUFBQSxDQUFDLENBQUNFLGNBQUY7QUFDQSxVQUFJQyxJQUFJLEdBQUdKLE1BQU0sQ0FBQ0ssWUFBUCxDQUFvQixhQUFwQixDQUFYOztBQUNBLFVBQUdELElBQUksQ0FBQ0UsS0FBTCxDQUFXLDRCQUFYLENBQUgsRUFBNEM7QUFDeENDLFFBQUFBLGVBQWU7QUFDbEI7QUFDSixLQVBEO0FBUUgsR0FURDtBQVVILENBbEJEIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBnZXRDdXJyZW5jaWVzKCk7IC8vIHVwZGF0ZSB0aGUgc2VsZWN0b3Igd2l0aCBjdXJyZW5jaWVzIGZyb20gdGhlIGFwaVxyXG5cclxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW50ZXIgdG8gY29udmVydCBjdXJyZW5jeSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRyb2xzIGJ1dHRvbltkYXRhLWJ1dHRvbl0nKTtcclxuICAgIFxyXG4gICAgbmV3IENvbnRyb2woKTsgLy8gc2V0IHVwIHRoZSBjb250cm9sIGJ1dHRvbnNcclxuXHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uPT57XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmKGRhdGEubWF0Y2goL15bMC05XXxcXC58Y2xlYXJ8YmFja3NwYWNlJC8pKXtcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRDdXJyZW5jeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7Il0sImZpbGUiOiJhcHAuanMifQ==
