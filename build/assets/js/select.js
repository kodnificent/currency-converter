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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RqcyIsInNlbGVjdERpdnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJ1cGRhdGVDdXN0b21TZWxlY3QiLCJjT3B0aW9uIiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlU2VsZWN0Iiwib3B0aW9ucyIsIm9wdGlvbiIsInNlbGVjdCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZUFsbFNlbGVjdCIsImNPcHRpb25JbWFnZSIsImNPcHRpb25EYXRhIiwic2VsZWN0ZWQiLCJ1bCIsInNlbCIsInNlbGVjdGVkSW5kZXgiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzcmMiLCJpbm5lclRleHQiLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJsaSIsImhhc0F0dHJpYnV0ZSIsImltZyIsInNwYW4iLCJzY3JvbGwiLCJvZmZzZXRUb3AiLCJpZCIsIm5hdGl2ZVNlbGVjdCIsInRleHRDb250ZW50Iiwib3B0IiwiY3VzdG9tU2VsZWN0IiwiY3VycmVudEVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxROzs7QUFDRixzQkFBYTtBQUFBOztBQUFBOztBQUNULFNBQUtDLFVBQUwsR0FBa0JDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBbEI7QUFDQSxRQUFHLENBQUMsS0FBS0YsVUFBVCxFQUFxQjtBQUNyQixTQUFLQSxVQUFMLENBQWdCRyxPQUFoQixDQUF3QixVQUFBQyxFQUFFLEVBQUU7QUFDeEIsTUFBQSxLQUFJLENBQUNDLGtCQUFMLENBQXdCRCxFQUF4QixFQUR3QixDQUd4Qjs7O0FBQ0EsVUFBSUUsT0FBTyxHQUFHRixFQUFFLENBQUNHLGFBQUgsQ0FBaUIsaUJBQWpCLENBQWQ7O0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0UsT0FBUixHQUFrQixVQUFDQyxDQUFELEVBQUs7QUFDbkJBLFFBQUFBLENBQUMsQ0FBQ0MsZUFBRjtBQUNBLGVBQU8sS0FBSSxDQUFDQyxZQUFMLENBQWtCUCxFQUFsQixDQUFQO0FBQ0gsT0FIRDs7QUFLQSxVQUFJUSxPQUFPLEdBQUdSLEVBQUUsQ0FBQ0YsZ0JBQUgsQ0FBb0IsZ0JBQXBCLENBQWQ7QUFDQVUsTUFBQUEsT0FBTyxDQUFDVCxPQUFSLENBQWdCLFVBQUFVLE1BQU0sRUFBRTtBQUNwQkEsUUFBQUEsTUFBTSxDQUFDTCxPQUFQLEdBQWlCLFVBQUFDLENBQUMsRUFBRztBQUNqQkEsVUFBQUEsQ0FBQyxDQUFDQyxlQUFGOztBQUNBLFVBQUEsS0FBSSxDQUFDSSxNQUFMLENBQVlWLEVBQVosRUFBZ0JLLENBQUMsQ0FBQ00sYUFBbEIsRUFGaUIsQ0FHakI7OztBQUNBLFVBQUEsS0FBSSxDQUFDQyxjQUFMO0FBQ0gsU0FMRDtBQU1ILE9BUEQ7QUFRSCxLQW5CRCxFQW1CRSxJQW5CRixFQUhTLENBd0JUOztBQUNBZixJQUFBQSxRQUFRLENBQUNPLE9BQVQsR0FBbUIsVUFBQ0MsQ0FBRCxFQUFLO0FBQ3BCLGFBQU8sS0FBSSxDQUFDTyxjQUFMLEVBQVA7QUFDSCxLQUZEO0FBR0g7QUFFRDs7Ozs7Ozs7dUNBSW1CWixFLEVBQUc7QUFDbEIsVUFBSUUsT0FBSixFQUFhVyxZQUFiLEVBQTJCQyxXQUEzQixFQUF3Q0MsUUFBeEMsRUFBa0RDLEVBQWxELEVBQXNEQyxHQUF0RDtBQUVBQSxNQUFBQSxHQUFHLEdBQUdqQixFQUFFLENBQUNHLGFBQUgsQ0FBaUIsUUFBakIsQ0FBTjtBQUNBLFVBQUcsQ0FBQ2MsR0FBSixFQUFTO0FBRVRGLE1BQUFBLFFBQVEsR0FBR0UsR0FBRyxDQUFDQSxHQUFHLENBQUNDLGFBQUwsQ0FBZCxDQU5rQixDQVFsQjs7QUFDQWhCLE1BQUFBLE9BQU8sR0FBR0wsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FqQixNQUFBQSxPQUFPLENBQUNrQixTQUFSLEdBQW9CLGdCQUFwQjtBQUNBbEIsTUFBQUEsT0FBTyxDQUFDbUIsWUFBUixDQUFxQixhQUFyQixFQUFvQyxNQUFwQztBQUNBbkIsTUFBQUEsT0FBTyxDQUFDbUIsWUFBUixDQUFxQixTQUFyQixFQUFnQ04sUUFBUSxDQUFDTyxZQUFULENBQXNCLFNBQXRCLENBQWhDO0FBQ0FwQixNQUFBQSxPQUFPLENBQUNtQixZQUFSLENBQXFCLFlBQXJCLEVBQW1DTixRQUFRLENBQUNRLEtBQTVDO0FBRUFWLE1BQUFBLFlBQVksR0FBR2hCLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBTixNQUFBQSxZQUFZLENBQUNXLEdBQWIsR0FBbUJULFFBQVEsQ0FBQ08sWUFBVCxDQUFzQixZQUF0QixDQUFuQjtBQUNBVCxNQUFBQSxZQUFZLENBQUNPLFNBQWIsR0FBeUIsY0FBekI7QUFFQU4sTUFBQUEsV0FBVyxHQUFHakIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixNQUF2QixDQUFkO0FBQ0FMLE1BQUFBLFdBQVcsQ0FBQ00sU0FBWixHQUF3QixhQUF4QjtBQUNBTixNQUFBQSxXQUFXLENBQUNXLFNBQVosR0FBdUJWLFFBQVEsQ0FBQ1csSUFBaEM7QUFFQXhCLE1BQUFBLE9BQU8sQ0FBQ3lCLFdBQVIsQ0FBb0JkLFlBQXBCO0FBQ0FYLE1BQUFBLE9BQU8sQ0FBQ3lCLFdBQVIsQ0FBb0JiLFdBQXBCO0FBQ0FkLE1BQUFBLEVBQUUsQ0FBQzJCLFdBQUgsQ0FBZXpCLE9BQWYsRUF6QmtCLENBMkJsQjs7QUFDQWMsTUFBQUEsRUFBRSxHQUFHbkIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixJQUF2QixDQUFMO0FBQ0FILE1BQUFBLEVBQUUsQ0FBQ0ssWUFBSCxDQUFnQixhQUFoQixFQUErQixNQUEvQjtBQUNBTCxNQUFBQSxFQUFFLENBQUNLLFlBQUgsQ0FBZ0IsV0FBaEIsRUFBNkIsT0FBN0I7QUFDQUwsTUFBQUEsRUFBRSxDQUFDSSxTQUFILEdBQWUsZUFBZjtBQUVBLFVBQUlaLE9BQU8sR0FBR1MsR0FBRyxDQUFDbkIsZ0JBQUosQ0FBcUIsUUFBckIsQ0FBZDtBQUNBVSxNQUFBQSxPQUFPLENBQUNULE9BQVIsQ0FBZ0IsVUFBQUMsRUFBRSxFQUFFO0FBQ2hCLFlBQUk0QixFQUFFLEdBQUcvQixRQUFRLENBQUNzQixhQUFULENBQXVCLElBQXZCLENBQVQ7QUFDQVMsUUFBQUEsRUFBRSxDQUFDUixTQUFILEdBQWUsZUFBZjtBQUNBUSxRQUFBQSxFQUFFLENBQUNQLFlBQUgsQ0FBZ0IsU0FBaEIsRUFBMkJyQixFQUFFLENBQUNzQixZQUFILENBQWdCLFNBQWhCLENBQTNCO0FBQ0FNLFFBQUFBLEVBQUUsQ0FBQ1AsWUFBSCxDQUFnQixZQUFoQixFQUE4QnJCLEVBQUUsQ0FBQ3VCLEtBQWpDOztBQUNBLFlBQUd2QixFQUFFLENBQUNzQixZQUFILENBQWdCLFNBQWhCLE1BQStCUCxRQUFRLENBQUNPLFlBQVQsQ0FBc0IsU0FBdEIsQ0FBbEMsRUFBb0U7QUFDaEVNLFVBQUFBLEVBQUUsQ0FBQ1AsWUFBSCxDQUFnQixlQUFoQixFQUFnQyxNQUFoQztBQUNIOztBQUNELFlBQUdyQixFQUFFLENBQUM2QixZQUFILENBQWdCLFlBQWhCLENBQUgsRUFBaUM7QUFDN0IsY0FBSUMsR0FBRyxHQUFHakMsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FXLFVBQUFBLEdBQUcsQ0FBQ04sR0FBSixHQUFVeEIsRUFBRSxDQUFDc0IsWUFBSCxDQUFnQixZQUFoQixDQUFWO0FBQ0FRLFVBQUFBLEdBQUcsQ0FBQ1YsU0FBSixHQUFnQixjQUFoQjtBQUNBUSxVQUFBQSxFQUFFLENBQUNELFdBQUgsQ0FBZUcsR0FBZjtBQUNIOztBQUNELFlBQUlDLElBQUksR0FBR2xDLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBWSxRQUFBQSxJQUFJLENBQUNYLFNBQUwsR0FBaUIsYUFBakI7QUFDQVcsUUFBQUEsSUFBSSxDQUFDTixTQUFMLEdBQWlCekIsRUFBRSxDQUFDMEIsSUFBcEI7QUFDQUUsUUFBQUEsRUFBRSxDQUFDRCxXQUFILENBQWVJLElBQWY7QUFFQWYsUUFBQUEsRUFBRSxDQUFDVyxXQUFILENBQWVDLEVBQWY7QUFDSCxPQXBCRCxFQWxDa0IsQ0F3RGxCO0FBQ0E7QUFDQTs7QUFFQTVCLE1BQUFBLEVBQUUsQ0FBQzJCLFdBQUgsQ0FBZVgsRUFBZixFQTVEa0IsQ0E4RGxCOztBQUNBLFVBQUlZLEVBQUUsR0FBR1osRUFBRSxDQUFDYixhQUFILENBQWlCLHNCQUFqQixDQUFUO0FBQ0FhLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVSxDQUFWLEVBQWFKLEVBQUUsQ0FBQ0ssU0FBaEI7QUFDSDtBQUVEOzs7Ozs7OzsyQkFLT2pDLEUsRUFBSVMsTSxFQUFPO0FBQ2QsVUFBSXlCLEVBQUUsR0FBR3pCLE1BQU0sQ0FBQ2EsWUFBUCxDQUFvQixTQUFwQixDQUFUO0FBQ0EsVUFBSUMsS0FBSyxHQUFHZCxNQUFNLENBQUNhLFlBQVAsQ0FBb0IsWUFBcEIsQ0FBWjtBQUNBLFVBQUlhLFlBQVksR0FBR25DLEVBQUUsQ0FBQ0csYUFBSCxDQUFpQixRQUFqQixDQUFuQjtBQUNBLFVBQUlELE9BQU8sR0FBR0YsRUFBRSxDQUFDRyxhQUFILENBQWlCLGlCQUFqQixDQUFkO0FBRUFELE1BQUFBLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQixjQUF0QixFQUFzQ2lDLFdBQXRDLEdBQW9EM0IsTUFBTSxDQUFDTixhQUFQLENBQXFCLGNBQXJCLEVBQXFDaUMsV0FBekY7QUFDQWxDLE1BQUFBLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQixlQUF0QixFQUF1Q3FCLEdBQXZDLEdBQTZDZixNQUFNLENBQUNOLGFBQVAsQ0FBcUIsZUFBckIsRUFBc0NxQixHQUFuRjtBQUNBdEIsTUFBQUEsT0FBTyxDQUFDbUIsWUFBUixDQUFxQixTQUFyQixFQUFnQ2EsRUFBaEM7QUFDQUMsTUFBQUEsWUFBWSxDQUFDWixLQUFiLEdBQXFCQSxLQUFyQjtBQUVBZCxNQUFBQSxNQUFNLENBQUNZLFlBQVAsQ0FBb0IsZUFBcEIsRUFBcUMsTUFBckM7QUFFQSxVQUFJYixPQUFPLEdBQUdSLEVBQUUsQ0FBQ0YsZ0JBQUgsQ0FBb0IsZ0JBQXBCLENBQWQ7QUFDQVUsTUFBQUEsT0FBTyxDQUFDVCxPQUFSLENBQWdCLFVBQUFzQyxHQUFHLEVBQUU7QUFDakIsWUFBR0EsR0FBRyxDQUFDZixZQUFKLENBQWlCLFNBQWpCLE1BQWdDWSxFQUFuQyxFQUF1QztBQUN2Q0csUUFBQUEsR0FBRyxDQUFDaEIsWUFBSixDQUFpQixlQUFqQixFQUFrQyxPQUFsQztBQUNILE9BSEQ7QUFJSDs7O2lDQUVZckIsRSxFQUFHO0FBQ1o7QUFDQSxXQUFLWSxjQUFMLENBQW9CWixFQUFwQixFQUZZLENBSVo7O0FBQ0EsVUFBSXNDLFlBQVksR0FBR3RDLEVBQUUsQ0FBQ0csYUFBSCxDQUFpQixnQkFBakIsQ0FBbkI7QUFDQSxVQUFHLENBQUNtQyxZQUFKLEVBQWtCOztBQUNsQixVQUFHQSxZQUFZLENBQUNoQixZQUFiLENBQTBCLFdBQTFCLE1BQTJDLE9BQTlDLEVBQXNEO0FBQ2xEZ0IsUUFBQUEsWUFBWSxDQUFDakIsWUFBYixDQUEwQixXQUExQixFQUF1QyxNQUF2QztBQUNILE9BRkQsTUFFTyxJQUFHaUIsWUFBWSxDQUFDaEIsWUFBYixDQUEwQixXQUExQixNQUEyQyxNQUE5QyxFQUFxRDtBQUN4RGdCLFFBQUFBLFlBQVksQ0FBQ2pCLFlBQWIsQ0FBMEIsV0FBMUIsRUFBdUMsT0FBdkM7QUFDSDs7QUFDRCxhQUFPLElBQVA7QUFDSDs7O3FDQUUrQjtBQUFBLFVBQWpCa0IsU0FBaUIsdUVBQUwsSUFBSztBQUM1QixXQUFLM0MsVUFBTCxDQUFnQkcsT0FBaEIsQ0FBd0IsVUFBQUMsRUFBRSxFQUFFO0FBQ3hCLFlBQUd1QyxTQUFTLElBQUlBLFNBQVMsS0FBS3ZDLEVBQTlCLEVBQWtDO0FBQ2xDLFlBQUlzQyxZQUFZLEdBQUd0QyxFQUFFLENBQUNHLGFBQUgsQ0FBaUIsZ0JBQWpCLENBQW5CO0FBQ0EsWUFBRyxDQUFDbUMsWUFBSixFQUFrQjtBQUNsQkEsUUFBQUEsWUFBWSxDQUFDakIsWUFBYixDQUEwQixXQUExQixFQUF1QyxPQUF2QztBQUNILE9BTEQ7QUFNSCIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFNlbGVjdGpzIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REaXZzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC1qcycpO1xyXG4gICAgICAgIGlmKCF0aGlzLnNlbGVjdERpdnMpIHJldHVybjtcclxuICAgICAgICB0aGlzLnNlbGVjdERpdnMuZm9yRWFjaChlbD0+e1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1c3RvbVNlbGVjdChlbCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBhZGQgY2xpY2sgZXZlbnQgdG8gdG9nZ2xlIHNlbGVjdFxyXG4gICAgICAgICAgICBsZXQgY09wdGlvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW9wdGlvbicpO1xyXG4gICAgICAgICAgICBjT3B0aW9uLm9uY2xpY2sgPSAoZSk9PntcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50b2dnbGVTZWxlY3QoZWwpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb249PntcclxuICAgICAgICAgICAgICAgIG9wdGlvbi5vbmNsaWNrID0gZSA9PntcclxuICAgICAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KGVsLCBlLmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vbG9vcCB0aHJvdWdoIGFsbCBvcHRpb25zIGFuZCBkZXNlbGVjdCBvcHRpb25zIHRoYXQgd2FzIGNsaWNrZWRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsb3NlQWxsU2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSx0aGlzKTtcclxuXHJcbiAgICAgICAgLy8gY2xvc2UgYWxsIHNlbGVjdCBib3ggd2hlbiBjbGlja2VkIG91dHNpZGUgdGhlIGJveFxyXG4gICAgICAgIGRvY3VtZW50Lm9uY2xpY2sgPSAoZSk9PntcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2VBbGxTZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVcGRhdGUgdGhlIGN1c3RvbSBzZWxlY3Qgd2l0aCBkYXRhIGZyb20gdGhlIG5hdGl2ZSBzZWxlY3QgZWxlbWVudFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbCAgdGhlIHRhcmdldCBkaXYgZWxlbWVudFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVDdXN0b21TZWxlY3QoZWwpe1xyXG4gICAgICAgIGxldCBjT3B0aW9uLCBjT3B0aW9uSW1hZ2UsIGNPcHRpb25EYXRhLCBzZWxlY3RlZCwgdWwsIHNlbDtcclxuICAgICAgICBcclxuICAgICAgICBzZWwgPSBlbC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICBpZighc2VsKSByZXR1cm47XHJcblxyXG4gICAgICAgIHNlbGVjdGVkID0gc2VsW3NlbC5zZWxlY3RlZEluZGV4XTtcclxuXHJcbiAgICAgICAgLy8gY3VycmVudCBvcHRpb24gZGl2XHJcbiAgICAgICAgY09wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNPcHRpb24uY2xhc3NOYW1lID0gJ2N1cnJlbnQtb3B0aW9uJztcclxuICAgICAgICBjT3B0aW9uLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIGNPcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICAgIGNPcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgc2VsZWN0ZWQudmFsdWUpO1xyXG5cclxuICAgICAgICBjT3B0aW9uSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjT3B0aW9uSW1hZ2Uuc3JjID0gc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJyk7XHJcbiAgICAgICAgY09wdGlvbkltYWdlLmNsYXNzTmFtZSA9ICdvcHRpb24taW1hZ2UnO1xyXG5cclxuICAgICAgICBjT3B0aW9uRGF0YSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBjT3B0aW9uRGF0YS5jbGFzc05hbWUgPSAnb3B0aW9uLWRhdGEnO1xyXG4gICAgICAgIGNPcHRpb25EYXRhLmlubmVyVGV4dD0gc2VsZWN0ZWQudGV4dDtcclxuXHJcbiAgICAgICAgY09wdGlvbi5hcHBlbmRDaGlsZChjT3B0aW9uSW1hZ2UpO1xyXG4gICAgICAgIGNPcHRpb24uYXBwZW5kQ2hpbGQoY09wdGlvbkRhdGEpO1xyXG4gICAgICAgIGVsLmFwcGVuZENoaWxkKGNPcHRpb24pO1xyXG5cclxuICAgICAgICAvLyBjdXN0b20gc2VsZWN0IGRpdlxyXG4gICAgICAgIHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuICAgICAgICB1bC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuICAgICAgICB1bC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicsICdmYWxzZScpO1xyXG4gICAgICAgIHVsLmNsYXNzTmFtZSA9ICdjdXN0b20tc2VsZWN0JztcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBzZWwucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGVsPT57XHJcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAgICAgICAgIGxpLmNsYXNzTmFtZSA9ICdjdXN0b20tb3B0aW9uJztcclxuICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykpO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBlbC52YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmKGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSkge1xyXG4gICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywndHJ1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGVsLmhhc0F0dHJpYnV0ZSgnZGF0YS1pbWFnZScpKXtcclxuICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnKTtcclxuICAgICAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSAnb3B0aW9uLWltYWdlJztcclxuICAgICAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgIHNwYW4uY2xhc3NOYW1lID0gJ29wdGlvbi1kYXRhJztcclxuICAgICAgICAgICAgc3Bhbi5pbm5lclRleHQgPSBlbC50ZXh0O1xyXG4gICAgICAgICAgICBsaS5hcHBlbmRDaGlsZChzcGFuKTtcclxuXHJcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9AVE9ETyBwZXJmb3JtIGtleWJvYXJkIGZpbHRlciBzZWFyY2hcclxuICAgICAgICAvL2RvY3VtZW50Lm9ua2V5ZG93biA9IGU9PntcclxuICAgICAgICAvL31cclxuXHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQodWwpO1xyXG5cclxuICAgICAgICAvLyBzY3JvbGwgdG8gc2VsZWN0ZWQgb3B0aW9uXHJcbiAgICAgICAgbGV0IGxpID0gdWwucXVlcnlTZWxlY3RvcignW2RhdGEtc2VsZWN0ZWQ9dHJ1ZV0nKTtcclxuICAgICAgICB1bC5zY3JvbGwoMCwgbGkub2Zmc2V0VG9wKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFBlcmZvcm0gc2VsZWN0IG9wZXJhdGlvblxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbCB0YXJnZXQgc2VsZWN0IGRpdiBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IG9wdGlvbiBjbGlja2VkIGN1c3RvbS1vcHRpb24gZWxlbWVudFxyXG4gICAgICovXHJcbiAgICBzZWxlY3QoZWwsIG9wdGlvbil7XHJcbiAgICAgICAgbGV0IGlkID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnKTtcclxuICAgICAgICBsZXQgbmF0aXZlU2VsZWN0ID0gZWwucXVlcnlTZWxlY3Rvcignc2VsZWN0Jyk7XHJcbiAgICAgICAgbGV0IGNPcHRpb24gPSBlbC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1vcHRpb24nKTtcclxuXHJcbiAgICAgICAgY09wdGlvbi5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWRhdGEnKS50ZXh0Q29udGVudCA9IG9wdGlvbi5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWRhdGEnKS50ZXh0Q29udGVudDtcclxuICAgICAgICBjT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24taW1hZ2UnKS5zcmMgPSBvcHRpb24ucXVlcnlTZWxlY3RvcignLm9wdGlvbi1pbWFnZScpLnNyYztcclxuICAgICAgICBjT3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pZCcsIGlkKTtcclxuICAgICAgICBuYXRpdmVTZWxlY3QudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICBcclxuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ3RydWUnKTtcclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLW9wdGlvbicpO1xyXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaChvcHQ9PntcclxuICAgICAgICAgICAgaWYob3B0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpID09PSBpZCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBvcHQuc2V0QXR0cmlidXRlKCdkYXRhLXNlbGVjdGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgdG9nZ2xlU2VsZWN0KGVsKXtcclxuICAgICAgICAvL2ZpcnN0IGNsb3NlIGFsbCBzZWxlY3QgYm94ZXNcclxuICAgICAgICB0aGlzLmNsb3NlQWxsU2VsZWN0KGVsKTtcclxuXHJcbiAgICAgICAgLy8gbm93IHRvZ2dsZSBjdXJyZW50IHNlbGVjdFxyXG4gICAgICAgIGxldCBjdXN0b21TZWxlY3QgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdCcpO1xyXG4gICAgICAgIGlmKCFjdXN0b21TZWxlY3QpIHJldHVybjtcclxuICAgICAgICBpZihjdXN0b21TZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nKSA9PT0gJ2ZhbHNlJyl7XHJcbiAgICAgICAgICAgIGN1c3RvbVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicsICd0cnVlJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGN1c3RvbVNlbGVjdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicpID09PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICBjdXN0b21TZWxlY3Quc2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nLCAnZmFsc2UnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvc2VBbGxTZWxlY3QoY3VycmVudEVsID0gbnVsbCl7XHJcbiAgICAgICAgdGhpcy5zZWxlY3REaXZzLmZvckVhY2goZWw9PntcclxuICAgICAgICAgICAgaWYoY3VycmVudEVsICYmIGN1cnJlbnRFbCA9PT0gZWwpIHJldHVybjtcclxuICAgICAgICAgICAgbGV0IGN1c3RvbVNlbGVjdCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b20tc2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIGlmKCFjdXN0b21TZWxlY3QpIHJldHVybjtcclxuICAgICAgICAgICAgY3VzdG9tU2VsZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwiZmlsZSI6InNlbGVjdC5qcyJ9
