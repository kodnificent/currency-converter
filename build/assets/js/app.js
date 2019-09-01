"use strict";

function database() {
  var dbPromise;

  if (!'indexedDB' in window) {
    console.log('browser does not support indexdb');
    dbPromise = new Promise(function (resolve, reject) {
      reject();
    });
  } else {
    dbPromise = idb.open('converter-db', 1, function (upgradeDb) {
      if (!upgradeDb.objectStoreNames.contains('rates')) {
        var ratesStore = upgradeDb.createObjectStore('rates', {
          keyPath: 'query'
        });
        ratesStore.createIndex('timestamp', 'timestamp');
      }
    });
  }

  return dbPromise;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlkYi5qcyJdLCJuYW1lcyI6WyJkYXRhYmFzZSIsImRiUHJvbWlzZSIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImlkYiIsIm9wZW4iLCJ1cGdyYWRlRGIiLCJvYmplY3RTdG9yZU5hbWVzIiwiY29udGFpbnMiLCJyYXRlc1N0b3JlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiY3JlYXRlSW5kZXgiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsUUFBVCxHQUFtQjtBQUNmLE1BQUlDLFNBQUo7O0FBQ0EsTUFBRyxDQUFDLFdBQUQsSUFBZ0JDLE1BQW5CLEVBQTJCO0FBQ3ZCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQ0FBWjtBQUNBSCxJQUFBQSxTQUFTLEdBQUcsSUFBSUksT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFtQjtBQUN2Q0EsTUFBQUEsTUFBTTtBQUNULEtBRlcsQ0FBWjtBQUdILEdBTEQsTUFLTztBQUNITixJQUFBQSxTQUFTLEdBQUdPLEdBQUcsQ0FBQ0MsSUFBSixDQUFTLGNBQVQsRUFBeUIsQ0FBekIsRUFBNEIsVUFBQUMsU0FBUyxFQUFFO0FBQy9DLFVBQUcsQ0FBQ0EsU0FBUyxDQUFDQyxnQkFBVixDQUEyQkMsUUFBM0IsQ0FBb0MsT0FBcEMsQ0FBSixFQUFpRDtBQUM3QyxZQUFJQyxVQUFVLEdBQUdILFNBQVMsQ0FBQ0ksaUJBQVYsQ0FBNEIsT0FBNUIsRUFBcUM7QUFBQ0MsVUFBQUEsT0FBTyxFQUFFO0FBQVYsU0FBckMsQ0FBakI7QUFDQUYsUUFBQUEsVUFBVSxDQUFDRyxXQUFYLENBQXVCLFdBQXZCLEVBQW9DLFdBQXBDO0FBQ0g7QUFDSixLQUxXLENBQVo7QUFNSDs7QUFDRCxTQUFPZixTQUFQO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkYXRhYmFzZSgpe1xyXG4gICAgbGV0IGRiUHJvbWlzZTtcclxuICAgIGlmKCEnaW5kZXhlZERCJyBpbiB3aW5kb3cpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGluZGV4ZGInKTtcclxuICAgICAgICBkYlByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xyXG4gICAgICAgICAgICByZWplY3QoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGJQcm9taXNlID0gaWRiLm9wZW4oJ2NvbnZlcnRlci1kYicsIDEsIHVwZ3JhZGVEYj0+e1xyXG4gICAgICAgICAgICBpZighdXBncmFkZURiLm9iamVjdFN0b3JlTmFtZXMuY29udGFpbnMoJ3JhdGVzJykpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHJhdGVzU3RvcmUgPSB1cGdyYWRlRGIuY3JlYXRlT2JqZWN0U3RvcmUoJ3JhdGVzJywge2tleVBhdGg6ICdxdWVyeSd9KTtcclxuICAgICAgICAgICAgICAgIHJhdGVzU3RvcmUuY3JlYXRlSW5kZXgoJ3RpbWVzdGFtcCcsICd0aW1lc3RhbXAnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGJQcm9taXNlOyAgXHJcbn1cclxuIl0sImZpbGUiOiJpZGIuanMifQ==

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
      }); // create a change event for the select element

      var evt = new Event('change');
      nativeSelect.dispatchEvent(evt);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdC5qcyJdLCJuYW1lcyI6WyJTZWxlY3RqcyIsInNlbGVjdERpdnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiZWwiLCJ1cGRhdGVDdXN0b21TZWxlY3QiLCJjT3B0aW9uIiwicXVlcnlTZWxlY3RvciIsIm9uY2xpY2siLCJlIiwic3RvcFByb3BhZ2F0aW9uIiwidG9nZ2xlU2VsZWN0Iiwib3B0aW9ucyIsIm9wdGlvbiIsInNlbGVjdCIsImN1cnJlbnRUYXJnZXQiLCJjbG9zZUFsbFNlbGVjdCIsImNPcHRpb25JbWFnZSIsImNPcHRpb25EYXRhIiwic2VsZWN0ZWQiLCJ1bCIsInNlbCIsInNlbGVjdGVkSW5kZXgiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwic2V0QXR0cmlidXRlIiwiZ2V0QXR0cmlidXRlIiwidmFsdWUiLCJzcmMiLCJpbm5lclRleHQiLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJsaSIsImhhc0F0dHJpYnV0ZSIsImltZyIsInNwYW4iLCJzY3JvbGwiLCJvZmZzZXRUb3AiLCJpZCIsIm5hdGl2ZVNlbGVjdCIsInRleHRDb250ZW50Iiwib3B0IiwiZXZ0IiwiRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiY3VzdG9tU2VsZWN0IiwiY3VycmVudEVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFNQSxROzs7QUFDRixzQkFBYTtBQUFBOztBQUFBOztBQUNULFNBQUtDLFVBQUwsR0FBa0JDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsWUFBMUIsQ0FBbEI7QUFDQSxRQUFHLENBQUMsS0FBS0YsVUFBVCxFQUFxQjtBQUNyQixTQUFLQSxVQUFMLENBQWdCRyxPQUFoQixDQUF3QixVQUFBQyxFQUFFLEVBQUU7QUFDeEIsTUFBQSxLQUFJLENBQUNDLGtCQUFMLENBQXdCRCxFQUF4QixFQUR3QixDQUd4Qjs7O0FBQ0EsVUFBSUUsT0FBTyxHQUFHRixFQUFFLENBQUNHLGFBQUgsQ0FBaUIsaUJBQWpCLENBQWQ7O0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0UsT0FBUixHQUFrQixVQUFDQyxDQUFELEVBQUs7QUFDbkJBLFFBQUFBLENBQUMsQ0FBQ0MsZUFBRjtBQUNBLGVBQU8sS0FBSSxDQUFDQyxZQUFMLENBQWtCUCxFQUFsQixDQUFQO0FBQ0gsT0FIRDs7QUFLQSxVQUFJUSxPQUFPLEdBQUdSLEVBQUUsQ0FBQ0YsZ0JBQUgsQ0FBb0IsZ0JBQXBCLENBQWQ7QUFDQVUsTUFBQUEsT0FBTyxDQUFDVCxPQUFSLENBQWdCLFVBQUFVLE1BQU0sRUFBRTtBQUNwQkEsUUFBQUEsTUFBTSxDQUFDTCxPQUFQLEdBQWlCLFVBQUFDLENBQUMsRUFBRztBQUNqQkEsVUFBQUEsQ0FBQyxDQUFDQyxlQUFGOztBQUNBLFVBQUEsS0FBSSxDQUFDSSxNQUFMLENBQVlWLEVBQVosRUFBZ0JLLENBQUMsQ0FBQ00sYUFBbEIsRUFGaUIsQ0FHakI7OztBQUNBLFVBQUEsS0FBSSxDQUFDQyxjQUFMO0FBQ0gsU0FMRDtBQU1ILE9BUEQ7QUFRSCxLQW5CRCxFQW1CRSxJQW5CRixFQUhTLENBd0JUOztBQUNBZixJQUFBQSxRQUFRLENBQUNPLE9BQVQsR0FBbUIsVUFBQ0MsQ0FBRCxFQUFLO0FBQ3BCLGFBQU8sS0FBSSxDQUFDTyxjQUFMLEVBQVA7QUFDSCxLQUZEO0FBR0g7QUFFRDs7Ozs7Ozs7dUNBSW1CWixFLEVBQUc7QUFDbEIsVUFBSUUsT0FBSixFQUFhVyxZQUFiLEVBQTJCQyxXQUEzQixFQUF3Q0MsUUFBeEMsRUFBa0RDLEVBQWxELEVBQXNEQyxHQUF0RDtBQUVBQSxNQUFBQSxHQUFHLEdBQUdqQixFQUFFLENBQUNHLGFBQUgsQ0FBaUIsUUFBakIsQ0FBTjtBQUNBLFVBQUcsQ0FBQ2MsR0FBSixFQUFTO0FBRVRGLE1BQUFBLFFBQVEsR0FBR0UsR0FBRyxDQUFDQSxHQUFHLENBQUNDLGFBQUwsQ0FBZCxDQU5rQixDQVFsQjs7QUFDQWhCLE1BQUFBLE9BQU8sR0FBR0wsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FqQixNQUFBQSxPQUFPLENBQUNrQixTQUFSLEdBQW9CLGdCQUFwQjtBQUNBbEIsTUFBQUEsT0FBTyxDQUFDbUIsWUFBUixDQUFxQixhQUFyQixFQUFvQyxNQUFwQztBQUNBbkIsTUFBQUEsT0FBTyxDQUFDbUIsWUFBUixDQUFxQixTQUFyQixFQUFnQ04sUUFBUSxDQUFDTyxZQUFULENBQXNCLFNBQXRCLENBQWhDO0FBQ0FwQixNQUFBQSxPQUFPLENBQUNtQixZQUFSLENBQXFCLFlBQXJCLEVBQW1DTixRQUFRLENBQUNRLEtBQTVDO0FBRUFWLE1BQUFBLFlBQVksR0FBR2hCLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBZjtBQUNBTixNQUFBQSxZQUFZLENBQUNXLEdBQWIsR0FBbUJULFFBQVEsQ0FBQ08sWUFBVCxDQUFzQixZQUF0QixDQUFuQjtBQUNBVCxNQUFBQSxZQUFZLENBQUNPLFNBQWIsR0FBeUIsY0FBekI7QUFFQU4sTUFBQUEsV0FBVyxHQUFHakIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixNQUF2QixDQUFkO0FBQ0FMLE1BQUFBLFdBQVcsQ0FBQ00sU0FBWixHQUF3QixhQUF4QjtBQUNBTixNQUFBQSxXQUFXLENBQUNXLFNBQVosR0FBdUJWLFFBQVEsQ0FBQ1csSUFBaEM7QUFFQXhCLE1BQUFBLE9BQU8sQ0FBQ3lCLFdBQVIsQ0FBb0JkLFlBQXBCO0FBQ0FYLE1BQUFBLE9BQU8sQ0FBQ3lCLFdBQVIsQ0FBb0JiLFdBQXBCO0FBQ0FkLE1BQUFBLEVBQUUsQ0FBQzJCLFdBQUgsQ0FBZXpCLE9BQWYsRUF6QmtCLENBMkJsQjs7QUFDQWMsTUFBQUEsRUFBRSxHQUFHbkIsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixJQUF2QixDQUFMO0FBQ0FILE1BQUFBLEVBQUUsQ0FBQ0ssWUFBSCxDQUFnQixhQUFoQixFQUErQixNQUEvQjtBQUNBTCxNQUFBQSxFQUFFLENBQUNLLFlBQUgsQ0FBZ0IsV0FBaEIsRUFBNkIsT0FBN0I7QUFDQUwsTUFBQUEsRUFBRSxDQUFDSSxTQUFILEdBQWUsZUFBZjtBQUVBLFVBQUlaLE9BQU8sR0FBR1MsR0FBRyxDQUFDbkIsZ0JBQUosQ0FBcUIsUUFBckIsQ0FBZDtBQUNBVSxNQUFBQSxPQUFPLENBQUNULE9BQVIsQ0FBZ0IsVUFBQUMsRUFBRSxFQUFFO0FBQ2hCLFlBQUk0QixFQUFFLEdBQUcvQixRQUFRLENBQUNzQixhQUFULENBQXVCLElBQXZCLENBQVQ7QUFDQVMsUUFBQUEsRUFBRSxDQUFDUixTQUFILEdBQWUsZUFBZjtBQUNBUSxRQUFBQSxFQUFFLENBQUNQLFlBQUgsQ0FBZ0IsU0FBaEIsRUFBMkJyQixFQUFFLENBQUNzQixZQUFILENBQWdCLFNBQWhCLENBQTNCO0FBQ0FNLFFBQUFBLEVBQUUsQ0FBQ1AsWUFBSCxDQUFnQixZQUFoQixFQUE4QnJCLEVBQUUsQ0FBQ3VCLEtBQWpDOztBQUNBLFlBQUd2QixFQUFFLENBQUNzQixZQUFILENBQWdCLFNBQWhCLE1BQStCUCxRQUFRLENBQUNPLFlBQVQsQ0FBc0IsU0FBdEIsQ0FBbEMsRUFBb0U7QUFDaEVNLFVBQUFBLEVBQUUsQ0FBQ1AsWUFBSCxDQUFnQixlQUFoQixFQUFnQyxNQUFoQztBQUNIOztBQUNELFlBQUdyQixFQUFFLENBQUM2QixZQUFILENBQWdCLFlBQWhCLENBQUgsRUFBaUM7QUFDN0IsY0FBSUMsR0FBRyxHQUFHakMsUUFBUSxDQUFDc0IsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FXLFVBQUFBLEdBQUcsQ0FBQ04sR0FBSixHQUFVeEIsRUFBRSxDQUFDc0IsWUFBSCxDQUFnQixZQUFoQixDQUFWO0FBQ0FRLFVBQUFBLEdBQUcsQ0FBQ1YsU0FBSixHQUFnQixjQUFoQjtBQUNBUSxVQUFBQSxFQUFFLENBQUNELFdBQUgsQ0FBZUcsR0FBZjtBQUNIOztBQUNELFlBQUlDLElBQUksR0FBR2xDLFFBQVEsQ0FBQ3NCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWDtBQUNBWSxRQUFBQSxJQUFJLENBQUNYLFNBQUwsR0FBaUIsYUFBakI7QUFDQVcsUUFBQUEsSUFBSSxDQUFDTixTQUFMLEdBQWlCekIsRUFBRSxDQUFDMEIsSUFBcEI7QUFDQUUsUUFBQUEsRUFBRSxDQUFDRCxXQUFILENBQWVJLElBQWY7QUFFQWYsUUFBQUEsRUFBRSxDQUFDVyxXQUFILENBQWVDLEVBQWY7QUFDSCxPQXBCRCxFQWxDa0IsQ0F3RGxCO0FBQ0E7QUFDQTs7QUFFQTVCLE1BQUFBLEVBQUUsQ0FBQzJCLFdBQUgsQ0FBZVgsRUFBZixFQTVEa0IsQ0E4RGxCOztBQUNBLFVBQUlZLEVBQUUsR0FBR1osRUFBRSxDQUFDYixhQUFILENBQWlCLHNCQUFqQixDQUFUO0FBQ0FhLE1BQUFBLEVBQUUsQ0FBQ2dCLE1BQUgsQ0FBVSxDQUFWLEVBQWFKLEVBQUUsQ0FBQ0ssU0FBaEI7QUFDSDtBQUVEOzs7Ozs7OzsyQkFLT2pDLEUsRUFBSVMsTSxFQUFPO0FBQ2QsVUFBSXlCLEVBQUUsR0FBR3pCLE1BQU0sQ0FBQ2EsWUFBUCxDQUFvQixTQUFwQixDQUFUO0FBQ0EsVUFBSUMsS0FBSyxHQUFHZCxNQUFNLENBQUNhLFlBQVAsQ0FBb0IsWUFBcEIsQ0FBWjtBQUNBLFVBQUlhLFlBQVksR0FBR25DLEVBQUUsQ0FBQ0csYUFBSCxDQUFpQixRQUFqQixDQUFuQjtBQUNBLFVBQUlELE9BQU8sR0FBR0YsRUFBRSxDQUFDRyxhQUFILENBQWlCLGlCQUFqQixDQUFkO0FBRUFELE1BQUFBLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQixjQUF0QixFQUFzQ2lDLFdBQXRDLEdBQW9EM0IsTUFBTSxDQUFDTixhQUFQLENBQXFCLGNBQXJCLEVBQXFDaUMsV0FBekY7QUFDQWxDLE1BQUFBLE9BQU8sQ0FBQ0MsYUFBUixDQUFzQixlQUF0QixFQUF1Q3FCLEdBQXZDLEdBQTZDZixNQUFNLENBQUNOLGFBQVAsQ0FBcUIsZUFBckIsRUFBc0NxQixHQUFuRjtBQUNBdEIsTUFBQUEsT0FBTyxDQUFDbUIsWUFBUixDQUFxQixTQUFyQixFQUFnQ2EsRUFBaEM7QUFDQUMsTUFBQUEsWUFBWSxDQUFDWixLQUFiLEdBQXFCQSxLQUFyQjtBQUVBZCxNQUFBQSxNQUFNLENBQUNZLFlBQVAsQ0FBb0IsZUFBcEIsRUFBcUMsTUFBckM7QUFFQSxVQUFJYixPQUFPLEdBQUdSLEVBQUUsQ0FBQ0YsZ0JBQUgsQ0FBb0IsZ0JBQXBCLENBQWQ7QUFDQVUsTUFBQUEsT0FBTyxDQUFDVCxPQUFSLENBQWdCLFVBQUFzQyxHQUFHLEVBQUU7QUFDakIsWUFBR0EsR0FBRyxDQUFDZixZQUFKLENBQWlCLFNBQWpCLE1BQWdDWSxFQUFuQyxFQUF1QztBQUN2Q0csUUFBQUEsR0FBRyxDQUFDaEIsWUFBSixDQUFpQixlQUFqQixFQUFrQyxPQUFsQztBQUNILE9BSEQsRUFkYyxDQW1CZDs7QUFDQSxVQUFNaUIsR0FBRyxHQUFHLElBQUlDLEtBQUosQ0FBVSxRQUFWLENBQVo7QUFDQUosTUFBQUEsWUFBWSxDQUFDSyxhQUFiLENBQTJCRixHQUEzQjtBQUNIOzs7aUNBRVl0QyxFLEVBQUc7QUFDWjtBQUNBLFdBQUtZLGNBQUwsQ0FBb0JaLEVBQXBCLEVBRlksQ0FJWjs7QUFDQSxVQUFJeUMsWUFBWSxHQUFHekMsRUFBRSxDQUFDRyxhQUFILENBQWlCLGdCQUFqQixDQUFuQjtBQUNBLFVBQUcsQ0FBQ3NDLFlBQUosRUFBa0I7O0FBQ2xCLFVBQUdBLFlBQVksQ0FBQ25CLFlBQWIsQ0FBMEIsV0FBMUIsTUFBMkMsT0FBOUMsRUFBc0Q7QUFDbERtQixRQUFBQSxZQUFZLENBQUNwQixZQUFiLENBQTBCLFdBQTFCLEVBQXVDLE1BQXZDO0FBQ0gsT0FGRCxNQUVPLElBQUdvQixZQUFZLENBQUNuQixZQUFiLENBQTBCLFdBQTFCLE1BQTJDLE1BQTlDLEVBQXFEO0FBQ3hEbUIsUUFBQUEsWUFBWSxDQUFDcEIsWUFBYixDQUEwQixXQUExQixFQUF1QyxPQUF2QztBQUNIOztBQUNELGFBQU8sSUFBUDtBQUNIOzs7cUNBRStCO0FBQUEsVUFBakJxQixTQUFpQix1RUFBTCxJQUFLO0FBQzVCLFdBQUs5QyxVQUFMLENBQWdCRyxPQUFoQixDQUF3QixVQUFBQyxFQUFFLEVBQUU7QUFDeEIsWUFBRzBDLFNBQVMsSUFBSUEsU0FBUyxLQUFLMUMsRUFBOUIsRUFBa0M7QUFDbEMsWUFBSXlDLFlBQVksR0FBR3pDLEVBQUUsQ0FBQ0csYUFBSCxDQUFpQixnQkFBakIsQ0FBbkI7QUFDQSxZQUFHLENBQUNzQyxZQUFKLEVBQWtCO0FBQ2xCQSxRQUFBQSxZQUFZLENBQUNwQixZQUFiLENBQTBCLFdBQTFCLEVBQXVDLE9BQXZDO0FBQ0gsT0FMRDtBQU1IIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgU2VsZWN0anMge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLnNlbGVjdERpdnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0LWpzJyk7XHJcbiAgICAgICAgaWYoIXRoaXMuc2VsZWN0RGl2cykgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGl2cy5mb3JFYWNoKGVsPT57XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VzdG9tU2VsZWN0KGVsKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGFkZCBjbGljayBldmVudCB0byB0b2dnbGUgc2VsZWN0XHJcbiAgICAgICAgICAgIGxldCBjT3B0aW9uID0gZWwucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIGNPcHRpb24ub25jbGljayA9IChlKT0+e1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnRvZ2dsZVNlbGVjdChlbCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0gZWwucXVlcnlTZWxlY3RvckFsbCgnLmN1c3RvbS1vcHRpb24nKTtcclxuICAgICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdGlvbj0+e1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uLm9uY2xpY2sgPSBlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3QoZWwsIGUuY3VycmVudFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9sb29wIHRocm91Z2ggYWxsIG9wdGlvbnMgYW5kIGRlc2VsZWN0IG9wdGlvbnMgdGhhdCB3YXMgY2xpY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VBbGxTZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuICAgICAgICAvLyBjbG9zZSBhbGwgc2VsZWN0IGJveCB3aGVuIGNsaWNrZWQgb3V0c2lkZSB0aGUgYm94XHJcbiAgICAgICAgZG9jdW1lbnQub25jbGljayA9IChlKT0+e1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbG9zZUFsbFNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFVwZGF0ZSB0aGUgY3VzdG9tIHNlbGVjdCB3aXRoIGRhdGEgZnJvbSB0aGUgbmF0aXZlIHNlbGVjdCBlbGVtZW50XHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsICB0aGUgdGFyZ2V0IGRpdiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUN1c3RvbVNlbGVjdChlbCl7XHJcbiAgICAgICAgbGV0IGNPcHRpb24sIGNPcHRpb25JbWFnZSwgY09wdGlvbkRhdGEsIHNlbGVjdGVkLCB1bCwgc2VsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNlbCA9IGVsLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpO1xyXG4gICAgICAgIGlmKCFzZWwpIHJldHVybjtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWQgPSBzZWxbc2VsLnNlbGVjdGVkSW5kZXhdO1xyXG5cclxuICAgICAgICAvLyBjdXJyZW50IG9wdGlvbiBkaXZcclxuICAgICAgICBjT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgY09wdGlvbi5jbGFzc05hbWUgPSAnY3VycmVudC1vcHRpb24nO1xyXG4gICAgICAgIGNPcHRpb24uc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICAgICAgY09wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgICAgY09wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCBzZWxlY3RlZC52YWx1ZSk7XHJcblxyXG4gICAgICAgIGNPcHRpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNPcHRpb25JbWFnZS5zcmMgPSBzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnKTtcclxuICAgICAgICBjT3B0aW9uSW1hZ2UuY2xhc3NOYW1lID0gJ29wdGlvbi1pbWFnZSc7XHJcblxyXG4gICAgICAgIGNPcHRpb25EYXRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGNPcHRpb25EYXRhLmNsYXNzTmFtZSA9ICdvcHRpb24tZGF0YSc7XHJcbiAgICAgICAgY09wdGlvbkRhdGEuaW5uZXJUZXh0PSBzZWxlY3RlZC50ZXh0O1xyXG5cclxuICAgICAgICBjT3B0aW9uLmFwcGVuZENoaWxkKGNPcHRpb25JbWFnZSk7XHJcbiAgICAgICAgY09wdGlvbi5hcHBlbmRDaGlsZChjT3B0aW9uRGF0YSk7XHJcbiAgICAgICAgZWwuYXBwZW5kQ2hpbGQoY09wdGlvbik7XHJcblxyXG4gICAgICAgIC8vIGN1c3RvbSBzZWxlY3QgZGl2XHJcbiAgICAgICAgdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4gICAgICAgIHVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIHVsLnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgdWwuY2xhc3NOYW1lID0gJ2N1c3RvbS1zZWxlY3QnO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHNlbC5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKTtcclxuICAgICAgICBvcHRpb25zLmZvckVhY2goZWw9PntcclxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgbGkuY2xhc3NOYW1lID0gJ2N1c3RvbS1vcHRpb24nO1xyXG4gICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnKSk7XHJcbiAgICAgICAgICAgIGxpLnNldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScsIGVsLnZhbHVlKTtcclxuICAgICAgICAgICAgaWYoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IHNlbGVjdGVkLmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBsaS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnLCd0cnVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoZWwuaGFzQXR0cmlidXRlKCdkYXRhLWltYWdlJykpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgICAgICAgICAgaW1nLnNyYyA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZScpO1xyXG4gICAgICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9ICdvcHRpb24taW1hZ2UnO1xyXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgc3Bhbi5jbGFzc05hbWUgPSAnb3B0aW9uLWRhdGEnO1xyXG4gICAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9IGVsLnRleHQ7XHJcbiAgICAgICAgICAgIGxpLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvL0BUT0RPIHBlcmZvcm0ga2V5Ym9hcmQgZmlsdGVyIHNlYXJjaFxyXG4gICAgICAgIC8vZG9jdW1lbnQub25rZXlkb3duID0gZT0+e1xyXG4gICAgICAgIC8vfVxyXG5cclxuICAgICAgICBlbC5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG4gICAgICAgIC8vIHNjcm9sbCB0byBzZWxlY3RlZCBvcHRpb25cclxuICAgICAgICBsZXQgbGkgPSB1bC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1zZWxlY3RlZD10cnVlXScpO1xyXG4gICAgICAgIHVsLnNjcm9sbCgwLCBsaS5vZmZzZXRUb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUGVyZm9ybSBzZWxlY3Qgb3BlcmF0aW9uXHJcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR9IGVsIHRhcmdldCBzZWxlY3QgZGl2IGVsZW1lbnRcclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gb3B0aW9uIGNsaWNrZWQgY3VzdG9tLW9wdGlvbiBlbGVtZW50XHJcbiAgICAgKi9cclxuICAgIHNlbGVjdChlbCwgb3B0aW9uKXtcclxuICAgICAgICBsZXQgaWQgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWlkJyk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS12YWx1ZScpO1xyXG4gICAgICAgIGxldCBuYXRpdmVTZWxlY3QgPSBlbC5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKTtcclxuICAgICAgICBsZXQgY09wdGlvbiA9IGVsLnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LW9wdGlvbicpO1xyXG5cclxuICAgICAgICBjT3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24tZGF0YScpLnRleHRDb250ZW50ID0gb3B0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5vcHRpb24tZGF0YScpLnRleHRDb250ZW50O1xyXG4gICAgICAgIGNPcHRpb24ucXVlcnlTZWxlY3RvcignLm9wdGlvbi1pbWFnZScpLnNyYyA9IG9wdGlvbi5xdWVyeVNlbGVjdG9yKCcub3B0aW9uLWltYWdlJykuc3JjO1xyXG4gICAgICAgIGNPcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgaWQpO1xyXG4gICAgICAgIG5hdGl2ZVNlbGVjdC52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IGVsLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tb3B0aW9uJyk7XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKG9wdD0+e1xyXG4gICAgICAgICAgICBpZihvcHQuZ2V0QXR0cmlidXRlKCdkYXRhLWlkJykgPT09IGlkKSByZXR1cm47XHJcbiAgICAgICAgICAgIG9wdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgY2hhbmdlIGV2ZW50IGZvciB0aGUgc2VsZWN0IGVsZW1lbnRcclxuICAgICAgICBjb25zdCBldnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xyXG4gICAgICAgIG5hdGl2ZVNlbGVjdC5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZ2dsZVNlbGVjdChlbCl7XHJcbiAgICAgICAgLy9maXJzdCBjbG9zZSBhbGwgc2VsZWN0IGJveGVzXHJcbiAgICAgICAgdGhpcy5jbG9zZUFsbFNlbGVjdChlbCk7XHJcblxyXG4gICAgICAgIC8vIG5vdyB0b2dnbGUgY3VycmVudCBzZWxlY3RcclxuICAgICAgICBsZXQgY3VzdG9tU2VsZWN0ID0gZWwucXVlcnlTZWxlY3RvcignLmN1c3RvbS1zZWxlY3QnKTtcclxuICAgICAgICBpZighY3VzdG9tU2VsZWN0KSByZXR1cm47XHJcbiAgICAgICAgaWYoY3VzdG9tU2VsZWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1vcGVuJykgPT09ICdmYWxzZScpe1xyXG4gICAgICAgICAgICBjdXN0b21TZWxlY3Quc2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nLCAndHJ1ZScpO1xyXG4gICAgICAgIH0gZWxzZSBpZihjdXN0b21TZWxlY3QuZ2V0QXR0cmlidXRlKCdkYXRhLW9wZW4nKSA9PT0gJ3RydWUnKXtcclxuICAgICAgICAgICAgY3VzdG9tU2VsZWN0LnNldEF0dHJpYnV0ZSgnZGF0YS1vcGVuJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlQWxsU2VsZWN0KGN1cnJlbnRFbCA9IG51bGwpe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RGl2cy5mb3JFYWNoKGVsPT57XHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRFbCAmJiBjdXJyZW50RWwgPT09IGVsKSByZXR1cm47XHJcbiAgICAgICAgICAgIGxldCBjdXN0b21TZWxlY3QgPSBlbC5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tLXNlbGVjdCcpO1xyXG4gICAgICAgICAgICBpZighY3VzdG9tU2VsZWN0KSByZXR1cm47XHJcbiAgICAgICAgICAgIGN1c3RvbVNlbGVjdC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3BlbicsICdmYWxzZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59Il0sImZpbGUiOiJzZWxlY3QuanMifQ==

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
var lastUp = document.querySelector('#last-update');
var image = './assets/imgs/flags';
var locale = 'en-US';
var formatterOpts = {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
};
/**
 * Update the app with the total result obtained after conversion
 * @param {Number} total The total output of the result
 * @param {Number|null} r the rate at which the currency was converted
 * @param {Number} time last update timestamp
 */

function updateResult(total, time) {
  var r = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  total = new Intl.NumberFormat(locale, formatterOpts).format(total);
  result.setAttribute('data-result', total);
  result.innerText = total;

  if (r) {
    rate.innerText = "".concat(r.toFixed(2), " ").concat(selFrom.value, " per ").concat(selTo.value);
  } else {
    rate.innerText = '';
  }

  lastUp.innerText = time ? timeDiff(time) : '';
}
/**
 * Convert between currencies. 
 * This function will be probably called when button input is made
 */


function convertCurrency() {
  var from = selFrom.value.toUpperCase();
  var to = selTo.value.toUpperCase();
  var amount = input.value;
  var timestamp = new Date().getTime();
  var query = "".concat(from, "_").concat(to);
  var rate, total; // we don't want to perform any conversion if we have a zero amount or we are converting between the same currency

  if (amount > 0 && from != to) {
    // we have just 100 requests per hour on the free currency converter plan. We have to use it wisely
    // check the database for rate and use the rate found in the database
    var dbPromise = database();
    dbPromise.then(function (db) {
      var tx = db.transaction('rates');
      var rates = tx.objectStore('rates');
      return rates.get(query);
    }).then(function (result) {
      // if there was no result from the database query fetch from the network
      if (!result) return fetch("".concat(api, "/convert?apiKey=").concat(key, "&q=").concat(query, "&compact=ultra"));
      var dbRate = result.rate;
      console.log('using rate from database');
      rate = dbRate;
      total = amount * rate;
      updateResult(total, result.timestamp, rate);
    }).then(function (result) {
      if (!result) return; // do nothing if no fetch to the network was made

      console.log('fetched rate from network');
      return result.json();
    }).then(function (data) {
      if (!data) return;
      if (data.error) throw new Error('free api limit reached'); //data error could be "Free API limit reached"

      rate = data[query];
      total = amount * rate;
      updateResult(total, timestamp, rate);
      return database();
    }).then(function (db) {
      if (!db) return;
      var tx = db.transaction('rates', 'readwrite');
      tx.objectStore('rates').put({
        query: query,
        rate: rate,
        timestamp: timestamp
      });
      return tx.complete;
    }).then(function () {
      console.log('updating table');
    })["catch"](function (err) {
      console.info(err);
    })["finally"](function () {// stop spinner
    });
  } else {
    // no input or input is less than 0
    updateResult(0);
  }
}
/**
 * Get all currencies and its neccessary details from our api
 */


function getCurrencies() {
  // load all currencies
  var getCurrencies = fetch("".concat(api, "/currencies?apiKey=").concat(key));
  getCurrencies.then(function (response) {
    return response.json();
  }).then(function (currencies) {
    if (currencies.error) throw new Error('free api limit reached'); // currencies.error could be "free api limit reached"
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
    // re instantiate the select js class to update the custom select div with currencies
    return new Selectjs();
  })["catch"](function (err) {
    console.info(err);
  });
}

;

function timeDiff(then) {
  if (!then) throw new Error('parameter 1 required');
  if (!then instanceof Date || typeof then !== 'number') throw new Error('parameter 1 should be an instance of Date or a number type');
  var now = new Date().getTime();
  then = then instanceof Date ? then.getTime() : then;
  var secDiff = parseInt((now - then) / 1000); //convert from milliseconds to seconds

  var perMin = 60;
  var perHour = perMin * 60;
  var perDay = perHour * 24;
  var perWeek = perDay * 7;
  var perMonth = perWeek * 4;
  var perYear = perMonth * 12;
  var timeDiff;

  switch (true) {
    case secDiff === 0:
      timeDiff = 'now';
      break;

    case secDiff < perMin:
      // less than a min
      timeDiff = "".concat(secDiff, "s ago");
      break;

    case secDiff < perHour:
      // less than an hour
      timeDiff = "".concat(parseInt(secDiff / perMin), "m ago");
      break;

    case secDiff < perDay:
      // less than a day
      timeDiff = "".concat(parseInt(secDiff / perHour), "h ago");
      break;

    case secDiff < perWeek:
      timeDiff = "".concat(parseInt(secDiff / perDay), "d ago");
      break;

    case secDiff < perMonth:
      timeDiff = "".concat(parseInt(secDiff / perWeek), "w ago");
      break;

    case secDiff < perYear:
      timeDiff = "".concat(parseInt(secDiff / perWeek), "mth ago");
      break;

    case secDiff >= perYear:
      timeDiff = "".concat(parseInt(secDiff / perYear), "y ago"); //@todo get stuffs like 1y6mth ago
      //tip: if secDiff/perYear is not a whole number then convert the remaining decimal to months

      break;
  }

  return timeDiff;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnZlcnRlci5qcyJdLCJuYW1lcyI6WyJrZXkiLCJhcGkiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2VsVG8iLCJzZWxGcm9tIiwiaW5wdXQiLCJyZXN1bHQiLCJyYXRlIiwibGFzdFVwIiwiaW1hZ2UiLCJsb2NhbGUiLCJmb3JtYXR0ZXJPcHRzIiwic3R5bGUiLCJtaW5pbXVtRnJhY3Rpb25EaWdpdHMiLCJtYXhpbXVtRnJhY3Rpb25EaWdpdHMiLCJ1cGRhdGVSZXN1bHQiLCJ0b3RhbCIsInRpbWUiLCJyIiwiSW50bCIsIk51bWJlckZvcm1hdCIsImZvcm1hdCIsInNldEF0dHJpYnV0ZSIsImlubmVyVGV4dCIsInRvRml4ZWQiLCJ2YWx1ZSIsInRpbWVEaWZmIiwiY29udmVydEN1cnJlbmN5IiwiZnJvbSIsInRvVXBwZXJDYXNlIiwidG8iLCJhbW91bnQiLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZ2V0VGltZSIsInF1ZXJ5IiwiZGJQcm9taXNlIiwiZGF0YWJhc2UiLCJ0aGVuIiwiZGIiLCJ0eCIsInRyYW5zYWN0aW9uIiwicmF0ZXMiLCJvYmplY3RTdG9yZSIsImdldCIsImZldGNoIiwiZGJSYXRlIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJkYXRhIiwiZXJyb3IiLCJFcnJvciIsInB1dCIsImNvbXBsZXRlIiwiZXJyIiwiaW5mbyIsImdldEN1cnJlbmNpZXMiLCJyZXNwb25zZSIsImN1cnJlbmNpZXMiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwicmVzdWx0cyIsInNvcnQiLCJpZCIsInNlbEluZGV4IiwiY3VycmVuY3kiLCJvcHRpb24iLCJjcmVhdGVFbGVtZW50IiwidG9Mb3dlckNhc2UiLCJ0ZXh0IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZEluZGV4IiwiU2VsZWN0anMiLCJub3ciLCJzZWNEaWZmIiwicGFyc2VJbnQiLCJwZXJNaW4iLCJwZXJIb3VyIiwicGVyRGF5IiwicGVyV2VlayIsInBlck1vbnRoIiwicGVyWWVhciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxHQUFHLEdBQUcsc0JBQVo7QUFDQSxJQUFNQyxHQUFHLEdBQUcsa0NBQVo7QUFDQSxJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsSUFBTUMsS0FBSyxHQUFHSCxJQUFJLENBQUNFLGFBQUwsQ0FBbUIsMkJBQW5CLENBQWQ7QUFDQSxJQUFNRSxPQUFPLEdBQUdKLElBQUksQ0FBQ0UsYUFBTCxDQUFtQiw2QkFBbkIsQ0FBaEI7QUFDQSxJQUFNRyxLQUFLLEdBQUdMLElBQUksQ0FBQ0UsYUFBTCxDQUFtQixvQkFBbkIsQ0FBZDtBQUNBLElBQU1JLE1BQU0sR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLFNBQXZCLENBQWY7QUFDQSxJQUFNSyxJQUFJLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFiO0FBQ0EsSUFBTU0sTUFBTSxHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBZjtBQUNBLElBQU1PLEtBQUssR0FBRyxxQkFBZDtBQUNBLElBQU1DLE1BQU0sR0FBRyxPQUFmO0FBQ0EsSUFBTUMsYUFBYSxHQUFHO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUUsU0FEVztBQUVsQkMsRUFBQUEscUJBQXFCLEVBQUUsQ0FGTDtBQUdsQkMsRUFBQUEscUJBQXFCLEVBQUU7QUFITCxDQUF0QjtBQU1BOzs7Ozs7O0FBTUEsU0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkJDLElBQTdCLEVBQTBDO0FBQUEsTUFBUEMsQ0FBTyx1RUFBTCxJQUFLO0FBQ3RDRixFQUFBQSxLQUFLLEdBQUcsSUFBSUcsSUFBSSxDQUFDQyxZQUFULENBQXNCVixNQUF0QixFQUE4QkMsYUFBOUIsRUFBNkNVLE1BQTdDLENBQW9ETCxLQUFwRCxDQUFSO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ2dCLFlBQVAsQ0FBb0IsYUFBcEIsRUFBbUNOLEtBQW5DO0FBQ0FWLEVBQUFBLE1BQU0sQ0FBQ2lCLFNBQVAsR0FBbUJQLEtBQW5COztBQUNBLE1BQUdFLENBQUgsRUFBSztBQUNEWCxJQUFBQSxJQUFJLENBQUNnQixTQUFMLGFBQW9CTCxDQUFDLENBQUNNLE9BQUYsQ0FBVSxDQUFWLENBQXBCLGNBQW9DcEIsT0FBTyxDQUFDcUIsS0FBNUMsa0JBQXlEdEIsS0FBSyxDQUFDc0IsS0FBL0Q7QUFDSCxHQUZELE1BRU87QUFDSGxCLElBQUFBLElBQUksQ0FBQ2dCLFNBQUwsR0FBaUIsRUFBakI7QUFDSDs7QUFDRGYsRUFBQUEsTUFBTSxDQUFDZSxTQUFQLEdBQW1CTixJQUFJLEdBQUdTLFFBQVEsQ0FBQ1QsSUFBRCxDQUFYLEdBQW9CLEVBQTNDO0FBQ0g7QUFFRDs7Ozs7O0FBSUEsU0FBU1UsZUFBVCxHQUEwQjtBQUN0QixNQUFJQyxJQUFJLEdBQUd4QixPQUFPLENBQUNxQixLQUFSLENBQWNJLFdBQWQsRUFBWDtBQUNBLE1BQUlDLEVBQUUsR0FBRzNCLEtBQUssQ0FBQ3NCLEtBQU4sQ0FBWUksV0FBWixFQUFUO0FBQ0EsTUFBSUUsTUFBTSxHQUFHMUIsS0FBSyxDQUFDb0IsS0FBbkI7QUFDQSxNQUFJTyxTQUFTLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQWhCO0FBQ0EsTUFBSUMsS0FBSyxhQUFNUCxJQUFOLGNBQWNFLEVBQWQsQ0FBVDtBQUNBLE1BQUl2QixJQUFKLEVBQVVTLEtBQVYsQ0FOc0IsQ0FRdEI7O0FBQ0EsTUFBR2UsTUFBTSxHQUFHLENBQVQsSUFBZUgsSUFBSSxJQUFJRSxFQUExQixFQUE4QjtBQUUxQjtBQUNBO0FBQ0EsUUFBSU0sU0FBUyxHQUFHQyxRQUFRLEVBQXhCO0FBQ0FELElBQUFBLFNBQVMsQ0FBQ0UsSUFBVixDQUFlLFVBQUFDLEVBQUUsRUFBRTtBQUNmLFVBQU1DLEVBQUUsR0FBR0QsRUFBRSxDQUFDRSxXQUFILENBQWUsT0FBZixDQUFYO0FBQ0EsVUFBTUMsS0FBSyxHQUFHRixFQUFFLENBQUNHLFdBQUgsQ0FBZSxPQUFmLENBQWQ7QUFDQSxhQUFPRCxLQUFLLENBQUNFLEdBQU4sQ0FBVVQsS0FBVixDQUFQO0FBQ0gsS0FKRCxFQUlHRyxJQUpILENBSVEsVUFBQWhDLE1BQU0sRUFBRTtBQUNaO0FBQ0EsVUFBRyxDQUFDQSxNQUFKLEVBQVksT0FBT3VDLEtBQUssV0FBSTlDLEdBQUosNkJBQTBCRCxHQUExQixnQkFBbUNxQyxLQUFuQyxvQkFBWjtBQUVaLFVBQUlXLE1BQU0sR0FBR3hDLE1BQU0sQ0FBQ0MsSUFBcEI7QUFDQXdDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDBCQUFaO0FBQ0F6QyxNQUFBQSxJQUFJLEdBQUd1QyxNQUFQO0FBQ0E5QixNQUFBQSxLQUFLLEdBQUdlLE1BQU0sR0FBR3hCLElBQWpCO0FBQ0FRLE1BQUFBLFlBQVksQ0FBQ0MsS0FBRCxFQUFRVixNQUFNLENBQUMwQixTQUFmLEVBQTBCekIsSUFBMUIsQ0FBWjtBQUNILEtBYkQsRUFhRytCLElBYkgsQ0FhUSxVQUFBaEMsTUFBTSxFQUFFO0FBRVosVUFBRyxDQUFDQSxNQUFKLEVBQVksT0FGQSxDQUVROztBQUNwQnlDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaO0FBQ0EsYUFBTzFDLE1BQU0sQ0FBQzJDLElBQVAsRUFBUDtBQUVILEtBbkJELEVBbUJHWCxJQW5CSCxDQW1CUSxVQUFBWSxJQUFJLEVBQUU7QUFDVixVQUFHLENBQUNBLElBQUosRUFBVTtBQUNWLFVBQUlBLElBQUksQ0FBQ0MsS0FBVCxFQUFnQixNQUFNLElBQUlDLEtBQUosQ0FBVSx3QkFBVixDQUFOLENBRk4sQ0FFa0Q7O0FBQzVEN0MsTUFBQUEsSUFBSSxHQUFHMkMsSUFBSSxDQUFDZixLQUFELENBQVg7QUFDQW5CLE1BQUFBLEtBQUssR0FBR2UsTUFBTSxHQUFHeEIsSUFBakI7QUFDQVEsTUFBQUEsWUFBWSxDQUFDQyxLQUFELEVBQVFnQixTQUFSLEVBQW1CekIsSUFBbkIsQ0FBWjtBQUNBLGFBQU84QixRQUFRLEVBQWY7QUFDSCxLQTFCRCxFQTBCR0MsSUExQkgsQ0EwQlEsVUFBQ0MsRUFBRCxFQUFNO0FBQ1YsVUFBRyxDQUFDQSxFQUFKLEVBQVE7QUFDUixVQUFNQyxFQUFFLEdBQUdELEVBQUUsQ0FBQ0UsV0FBSCxDQUFlLE9BQWYsRUFBd0IsV0FBeEIsQ0FBWDtBQUNBRCxNQUFBQSxFQUFFLENBQUNHLFdBQUgsQ0FBZSxPQUFmLEVBQXdCVSxHQUF4QixDQUE0QjtBQUFDbEIsUUFBQUEsS0FBSyxFQUFMQSxLQUFEO0FBQVE1QixRQUFBQSxJQUFJLEVBQUpBLElBQVI7QUFBY3lCLFFBQUFBLFNBQVMsRUFBVEE7QUFBZCxPQUE1QjtBQUNBLGFBQU9RLEVBQUUsQ0FBQ2MsUUFBVjtBQUNILEtBL0JELEVBK0JHaEIsSUEvQkgsQ0ErQlEsWUFBSTtBQUNSUyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNILEtBakNELFdBaUNTLFVBQUFPLEdBQUcsRUFBRTtBQUNWUixNQUFBQSxPQUFPLENBQUNTLElBQVIsQ0FBYUQsR0FBYjtBQUNILEtBbkNELGFBbUNXLFlBQUksQ0FDWDtBQUNILEtBckNEO0FBc0NILEdBM0NELE1BMkNPO0FBQ0g7QUFDQXhDLElBQUFBLFlBQVksQ0FBQyxDQUFELENBQVo7QUFDSDtBQUNKO0FBRUQ7Ozs7O0FBR0EsU0FBUzBDLGFBQVQsR0FBd0I7QUFFcEI7QUFDQSxNQUFNQSxhQUFhLEdBQUdaLEtBQUssV0FBSTlDLEdBQUosZ0NBQTZCRCxHQUE3QixFQUEzQjtBQUNBMkQsRUFBQUEsYUFBYSxDQUFDbkIsSUFBZCxDQUFtQixVQUFBb0IsUUFBUSxFQUFFO0FBQ3pCLFdBQU9BLFFBQVEsQ0FBQ1QsSUFBVCxFQUFQO0FBQ0gsR0FGRCxFQUVHWCxJQUZILENBRVEsVUFBQXFCLFVBQVUsRUFBRTtBQUVoQixRQUFHQSxVQUFVLENBQUNSLEtBQWQsRUFBcUIsTUFBTSxJQUFJQyxLQUFKLENBQVUsd0JBQVYsQ0FBTixDQUZMLENBRWdEO0FBRWhFOztBQUNBLFFBQUlRLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILFVBQVUsQ0FBQ0ksT0FBdkIsQ0FBVjtBQUNBSCxJQUFBQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0ksSUFBSixFQUFOO0FBQ0EsUUFBSUMsRUFBRSxHQUFHLENBQVQ7QUFDQSxRQUFJQyxRQUFRLEdBQUcsQ0FBZjtBQVJnQjtBQUFBO0FBQUE7O0FBQUE7QUFTaEIsMkJBQWVOLEdBQWYsOEhBQW1CO0FBQUEsWUFBWDlELElBQVc7QUFDZixZQUFJcUUsUUFBUSxHQUFHUixVQUFVLENBQUNJLE9BQVgsQ0FBbUJqRSxJQUFuQixDQUFmO0FBQ0EsWUFBSXNFLE1BQU0sR0FBR25FLFFBQVEsQ0FBQ29FLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRCxRQUFBQSxNQUFNLENBQUMzQyxLQUFQLEdBQWUwQyxRQUFRLENBQUNGLEVBQVQsQ0FBWUssV0FBWixFQUFmO0FBQ0FGLFFBQUFBLE1BQU0sQ0FBQzlDLFlBQVAsQ0FBb0IsU0FBcEIsRUFBK0IsRUFBRTJDLEVBQWpDO0FBQ0FHLFFBQUFBLE1BQU0sQ0FBQzlDLFlBQVAsQ0FBb0IsWUFBcEIsWUFBcUNiLEtBQXJDLGNBQThDMEQsUUFBUSxDQUFDRixFQUFULENBQVlLLFdBQVosRUFBOUM7QUFDQUYsUUFBQUEsTUFBTSxDQUFDRyxJQUFQLEdBQWNKLFFBQVEsQ0FBQ0YsRUFBdkI7QUFDQTlELFFBQUFBLEtBQUssQ0FBQ3FFLFdBQU4sQ0FBa0JKLE1BQWxCLEVBUGUsQ0FRZjs7QUFDQSxZQUFHRCxRQUFRLENBQUNGLEVBQVQsSUFBZSxLQUFsQixFQUF3QjtBQUNwQkMsVUFBQUEsUUFBUSxHQUFHRCxFQUFFLEdBQUcsQ0FBaEI7QUFDQTlELFVBQUFBLEtBQUssQ0FBQ3NFLGFBQU4sR0FBc0JQLFFBQXRCO0FBQ0g7QUFDSjtBQXRCZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXVCaEIsV0FBT1AsVUFBUDtBQUNILEdBMUJELEVBMEJHckIsSUExQkgsQ0EwQlEsVUFBQXFCLFVBQVUsRUFBRTtBQUNoQixRQUFJQyxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxVQUFVLENBQUNJLE9BQXZCLENBQVY7QUFDQUgsSUFBQUEsR0FBRyxHQUFHQSxHQUFHLENBQUNJLElBQUosRUFBTjtBQUNBLFFBQUlDLEVBQUUsR0FBRyxDQUFUO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLENBQWY7QUFKZ0I7QUFBQTtBQUFBOztBQUFBO0FBS2hCLDRCQUFlTixHQUFmLG1JQUFtQjtBQUFBLFlBQVg5RCxLQUFXO0FBQ2YsWUFBSXFFLFFBQVEsR0FBR1IsVUFBVSxDQUFDSSxPQUFYLENBQW1CakUsS0FBbkIsQ0FBZjtBQUNBLFlBQUlzRSxNQUFNLEdBQUduRSxRQUFRLENBQUNvRSxhQUFULENBQXVCLFFBQXZCLENBQWI7QUFDQUQsUUFBQUEsTUFBTSxDQUFDM0MsS0FBUCxHQUFlMEMsUUFBUSxDQUFDRixFQUFULENBQVlLLFdBQVosRUFBZjtBQUNBRixRQUFBQSxNQUFNLENBQUM5QyxZQUFQLENBQW9CLFNBQXBCLEVBQStCLEVBQUUyQyxFQUFqQztBQUNBRyxRQUFBQSxNQUFNLENBQUM5QyxZQUFQLENBQW9CLFlBQXBCLFlBQXFDYixLQUFyQyxjQUE4QzBELFFBQVEsQ0FBQ0YsRUFBVCxDQUFZSyxXQUFaLEVBQTlDO0FBQ0FGLFFBQUFBLE1BQU0sQ0FBQ0csSUFBUCxHQUFjSixRQUFRLENBQUNGLEVBQXZCO0FBQ0E3RCxRQUFBQSxPQUFPLENBQUNvRSxXQUFSLENBQW9CSixNQUFwQixFQVBlLENBUWY7O0FBQ0EsWUFBR0QsUUFBUSxDQUFDRixFQUFULElBQWUsS0FBbEIsRUFBd0I7QUFDcEJDLFVBQUFBLFFBQVEsR0FBR0QsRUFBRSxHQUFHLENBQWhCO0FBQ0E3RCxVQUFBQSxPQUFPLENBQUNxRSxhQUFSLEdBQXdCUCxRQUF4QjtBQUNIO0FBQ0o7QUFsQmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFtQmhCO0FBQ0gsR0E5Q0QsRUE4Q0c1QixJQTlDSCxDQThDUSxZQUFJO0FBQ1I7QUFDQSxXQUFPLElBQUlvQyxRQUFKLEVBQVA7QUFDSCxHQWpERCxXQWlEUyxVQUFBbkIsR0FBRyxFQUFFO0FBQ1ZSLElBQUFBLE9BQU8sQ0FBQ1MsSUFBUixDQUFhRCxHQUFiO0FBQ0gsR0FuREQ7QUFvREg7O0FBQUE7O0FBRUQsU0FBUzdCLFFBQVQsQ0FBa0JZLElBQWxCLEVBQXVCO0FBQ25CLE1BQUcsQ0FBQ0EsSUFBSixFQUFVLE1BQU0sSUFBSWMsS0FBSixDQUFVLHNCQUFWLENBQU47QUFDVixNQUFJLENBQUNkLElBQUQsWUFBaUJMLElBQWpCLElBQXlCLE9BQU9LLElBQVAsS0FBZ0IsUUFBN0MsRUFBdUQsTUFBTSxJQUFJYyxLQUFKLENBQVUsNERBQVYsQ0FBTjtBQUN2RCxNQUFJdUIsR0FBRyxHQUFHLElBQUkxQyxJQUFKLEdBQVdDLE9BQVgsRUFBVjtBQUNBSSxFQUFBQSxJQUFJLEdBQUdBLElBQUksWUFBWUwsSUFBaEIsR0FBdUJLLElBQUksQ0FBQ0osT0FBTCxFQUF2QixHQUF3Q0ksSUFBL0M7QUFDQSxNQUFJc0MsT0FBTyxHQUFHQyxRQUFRLENBQUMsQ0FBQ0YsR0FBRyxHQUFHckMsSUFBUCxJQUFlLElBQWhCLENBQXRCLENBTG1CLENBSzBCOztBQUM3QyxNQUFJd0MsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJQyxPQUFPLEdBQUdELE1BQU0sR0FBRyxFQUF2QjtBQUNBLE1BQUlFLE1BQU0sR0FBR0QsT0FBTyxHQUFHLEVBQXZCO0FBQ0EsTUFBSUUsT0FBTyxHQUFHRCxNQUFNLEdBQUcsQ0FBdkI7QUFDQSxNQUFJRSxRQUFRLEdBQUdELE9BQU8sR0FBRyxDQUF6QjtBQUNBLE1BQUlFLE9BQU8sR0FBR0QsUUFBUSxHQUFHLEVBQXpCO0FBRUEsTUFBSXhELFFBQUo7O0FBRUEsVUFBTyxJQUFQO0FBQ0ksU0FBS2tELE9BQU8sS0FBSyxDQUFqQjtBQUNJbEQsTUFBQUEsUUFBUSxHQUFHLEtBQVg7QUFDQTs7QUFDSixTQUFLa0QsT0FBTyxHQUFHRSxNQUFmO0FBQXVCO0FBQ25CcEQsTUFBQUEsUUFBUSxhQUFNa0QsT0FBTixVQUFSO0FBQ0E7O0FBQ0osU0FBS0EsT0FBTyxHQUFHRyxPQUFmO0FBQXdCO0FBQ3BCckQsTUFBQUEsUUFBUSxhQUFNbUQsUUFBUSxDQUFDRCxPQUFPLEdBQUNFLE1BQVQsQ0FBZCxVQUFSO0FBQ0E7O0FBQ0osU0FBS0YsT0FBTyxHQUFHSSxNQUFmO0FBQXVCO0FBQ25CdEQsTUFBQUEsUUFBUSxhQUFNbUQsUUFBUSxDQUFDRCxPQUFPLEdBQUNHLE9BQVQsQ0FBZCxVQUFSO0FBQ0E7O0FBQ0osU0FBS0gsT0FBTyxHQUFHSyxPQUFmO0FBQ0l2RCxNQUFBQSxRQUFRLGFBQU1tRCxRQUFRLENBQUNELE9BQU8sR0FBQ0ksTUFBVCxDQUFkLFVBQVI7QUFDQTs7QUFDSixTQUFLSixPQUFPLEdBQUdNLFFBQWY7QUFDSXhELE1BQUFBLFFBQVEsYUFBTW1ELFFBQVEsQ0FBQ0QsT0FBTyxHQUFDSyxPQUFULENBQWQsVUFBUjtBQUNBOztBQUNKLFNBQUtMLE9BQU8sR0FBR08sT0FBZjtBQUNJekQsTUFBQUEsUUFBUSxhQUFNbUQsUUFBUSxDQUFDRCxPQUFPLEdBQUNLLE9BQVQsQ0FBZCxZQUFSO0FBQ0E7O0FBQ0osU0FBS0wsT0FBTyxJQUFJTyxPQUFoQjtBQUNJekQsTUFBQUEsUUFBUSxhQUFNbUQsUUFBUSxDQUFDRCxPQUFPLEdBQUNPLE9BQVQsQ0FBZCxVQUFSLENBREosQ0FFSTtBQUNBOztBQUNBO0FBMUJSOztBQTRCQSxTQUFPekQsUUFBUDtBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qga2V5ID0gJzgzZjQ1NzgxYjljZDJkMTNkZDE2JztcclxuY29uc3QgYXBpID0gJ2h0dHBzOi8vZnJlZS5jdXJyY29udi5jb20vYXBpL3Y3JztcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JlZW4tZm9ybScpO1xyXG5jb25zdCBzZWxUbyA9IGZvcm0ucXVlcnlTZWxlY3Rvcignc2VsZWN0W25hbWU9Y291bnRyaWVzLXRvXScpO1xyXG5jb25zdCBzZWxGcm9tID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdzZWxlY3RbbmFtZT1jb3VudHJpZXMtZnJvbV0nKTtcclxuY29uc3QgaW5wdXQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9YW1vdW50XScpO1xyXG5jb25zdCByZXN1bHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdWx0Jyk7XHJcbmNvbnN0IHJhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmF0ZScpO1xyXG5jb25zdCBsYXN0VXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbGFzdC11cGRhdGUnKTtcclxuY29uc3QgaW1hZ2UgPSAnLi9hc3NldHMvaW1ncy9mbGFncyc7XHJcbmNvbnN0IGxvY2FsZSA9ICdlbi1VUyc7XHJcbmNvbnN0IGZvcm1hdHRlck9wdHMgPSB7XHJcbiAgICBzdHlsZTogJ2RlY2ltYWwnLFxyXG4gICAgbWluaW11bUZyYWN0aW9uRGlnaXRzOiAyLFxyXG4gICAgbWF4aW11bUZyYWN0aW9uRGlnaXRzOiAyXHJcbn07XHJcblxyXG4vKipcclxuICogVXBkYXRlIHRoZSBhcHAgd2l0aCB0aGUgdG90YWwgcmVzdWx0IG9idGFpbmVkIGFmdGVyIGNvbnZlcnNpb25cclxuICogQHBhcmFtIHtOdW1iZXJ9IHRvdGFsIFRoZSB0b3RhbCBvdXRwdXQgb2YgdGhlIHJlc3VsdFxyXG4gKiBAcGFyYW0ge051bWJlcnxudWxsfSByIHRoZSByYXRlIGF0IHdoaWNoIHRoZSBjdXJyZW5jeSB3YXMgY29udmVydGVkXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lIGxhc3QgdXBkYXRlIHRpbWVzdGFtcFxyXG4gKi9cclxuZnVuY3Rpb24gdXBkYXRlUmVzdWx0KHRvdGFsLCB0aW1lLCByPW51bGwpe1xyXG4gICAgdG90YWwgPSBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlLCBmb3JtYXR0ZXJPcHRzKS5mb3JtYXQodG90YWwpO1xyXG4gICAgcmVzdWx0LnNldEF0dHJpYnV0ZSgnZGF0YS1yZXN1bHQnLCB0b3RhbCk7XHJcbiAgICByZXN1bHQuaW5uZXJUZXh0ID0gdG90YWw7XHJcbiAgICBpZihyKXtcclxuICAgICAgICByYXRlLmlubmVyVGV4dCA9IGAke3IudG9GaXhlZCgyKX0gJHtzZWxGcm9tLnZhbHVlfSBwZXIgJHtzZWxUby52YWx1ZX1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByYXRlLmlubmVyVGV4dCA9ICcnO1xyXG4gICAgfVxyXG4gICAgbGFzdFVwLmlubmVyVGV4dCA9IHRpbWUgPyB0aW1lRGlmZih0aW1lKSA6ICcnO1xyXG59XHJcblxyXG4vKipcclxuICogQ29udmVydCBiZXR3ZWVuIGN1cnJlbmNpZXMuIFxyXG4gKiBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgcHJvYmFibHkgY2FsbGVkIHdoZW4gYnV0dG9uIGlucHV0IGlzIG1hZGVcclxuICovXHJcbmZ1bmN0aW9uIGNvbnZlcnRDdXJyZW5jeSgpe1xyXG4gICAgbGV0IGZyb20gPSBzZWxGcm9tLnZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICBsZXQgdG8gPSBzZWxUby52YWx1ZS50b1VwcGVyQ2FzZSgpO1xyXG4gICAgbGV0IGFtb3VudCA9IGlucHV0LnZhbHVlO1xyXG4gICAgbGV0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgbGV0IHF1ZXJ5ID0gYCR7ZnJvbX1fJHt0b31gO1xyXG4gICAgbGV0IHJhdGUsIHRvdGFsO1xyXG5cclxuICAgIC8vIHdlIGRvbid0IHdhbnQgdG8gcGVyZm9ybSBhbnkgY29udmVyc2lvbiBpZiB3ZSBoYXZlIGEgemVybyBhbW91bnQgb3Igd2UgYXJlIGNvbnZlcnRpbmcgYmV0d2VlbiB0aGUgc2FtZSBjdXJyZW5jeVxyXG4gICAgaWYoYW1vdW50ID4gMCAmJiAoZnJvbSAhPSB0bykpe1xyXG5cclxuICAgICAgICAvLyB3ZSBoYXZlIGp1c3QgMTAwIHJlcXVlc3RzIHBlciBob3VyIG9uIHRoZSBmcmVlIGN1cnJlbmN5IGNvbnZlcnRlciBwbGFuLiBXZSBoYXZlIHRvIHVzZSBpdCB3aXNlbHlcclxuICAgICAgICAvLyBjaGVjayB0aGUgZGF0YWJhc2UgZm9yIHJhdGUgYW5kIHVzZSB0aGUgcmF0ZSBmb3VuZCBpbiB0aGUgZGF0YWJhc2VcclxuICAgICAgICBsZXQgZGJQcm9taXNlID0gZGF0YWJhc2UoKTtcclxuICAgICAgICBkYlByb21pc2UudGhlbihkYj0+e1xyXG4gICAgICAgICAgICBjb25zdCB0eCA9IGRiLnRyYW5zYWN0aW9uKCdyYXRlcycpO1xyXG4gICAgICAgICAgICBjb25zdCByYXRlcyA9IHR4Lm9iamVjdFN0b3JlKCdyYXRlcycpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmF0ZXMuZ2V0KHF1ZXJ5KTtcclxuICAgICAgICB9KS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAvLyBpZiB0aGVyZSB3YXMgbm8gcmVzdWx0IGZyb20gdGhlIGRhdGFiYXNlIHF1ZXJ5IGZldGNoIGZyb20gdGhlIG5ldHdvcmtcclxuICAgICAgICAgICAgaWYoIXJlc3VsdCkgcmV0dXJuIGZldGNoKGAke2FwaX0vY29udmVydD9hcGlLZXk9JHtrZXl9JnE9JHtxdWVyeX0mY29tcGFjdD11bHRyYWApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGRiUmF0ZSA9IHJlc3VsdC5yYXRlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXNpbmcgcmF0ZSBmcm9tIGRhdGFiYXNlJyk7XHJcbiAgICAgICAgICAgIHJhdGUgPSBkYlJhdGU7XHJcbiAgICAgICAgICAgIHRvdGFsID0gYW1vdW50ICogcmF0ZTtcclxuICAgICAgICAgICAgdXBkYXRlUmVzdWx0KHRvdGFsLCByZXN1bHQudGltZXN0YW1wLCByYXRlKTtcclxuICAgICAgICB9KS50aGVuKHJlc3VsdD0+e1xyXG5cclxuICAgICAgICAgICAgaWYoIXJlc3VsdCkgcmV0dXJuOyAvLyBkbyBub3RoaW5nIGlmIG5vIGZldGNoIHRvIHRoZSBuZXR3b3JrIHdhcyBtYWRlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdmZXRjaGVkIHJhdGUgZnJvbSBuZXR3b3JrJyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuanNvbigpO1xyXG5cclxuICAgICAgICB9KS50aGVuKGRhdGE9PntcclxuICAgICAgICAgICAgaWYoIWRhdGEpIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHRocm93IG5ldyBFcnJvcignZnJlZSBhcGkgbGltaXQgcmVhY2hlZCcpOyAgLy9kYXRhIGVycm9yIGNvdWxkIGJlIFwiRnJlZSBBUEkgbGltaXQgcmVhY2hlZFwiXHJcbiAgICAgICAgICAgIHJhdGUgPSBkYXRhW3F1ZXJ5XTtcclxuICAgICAgICAgICAgdG90YWwgPSBhbW91bnQgKiByYXRlO1xyXG4gICAgICAgICAgICB1cGRhdGVSZXN1bHQodG90YWwsIHRpbWVzdGFtcCwgcmF0ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhYmFzZSgpO1xyXG4gICAgICAgIH0pLnRoZW4oKGRiKT0+e1xyXG4gICAgICAgICAgICBpZighZGIpIHJldHVybjtcclxuICAgICAgICAgICAgY29uc3QgdHggPSBkYi50cmFuc2FjdGlvbigncmF0ZXMnLCAncmVhZHdyaXRlJyk7XHJcbiAgICAgICAgICAgIHR4Lm9iamVjdFN0b3JlKCdyYXRlcycpLnB1dCh7cXVlcnksIHJhdGUsIHRpbWVzdGFtcH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gdHguY29tcGxldGU7XHJcbiAgICAgICAgfSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygndXBkYXRpbmcgdGFibGUnKVxyXG4gICAgICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oZXJyKTtcclxuICAgICAgICB9KS5maW5hbGx5KCgpPT57XHJcbiAgICAgICAgICAgIC8vIHN0b3Agc3Bpbm5lclxyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBubyBpbnB1dCBvciBpbnB1dCBpcyBsZXNzIHRoYW4gMFxyXG4gICAgICAgIHVwZGF0ZVJlc3VsdCgwKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdldCBhbGwgY3VycmVuY2llcyBhbmQgaXRzIG5lY2Nlc3NhcnkgZGV0YWlscyBmcm9tIG91ciBhcGlcclxuICovXHJcbmZ1bmN0aW9uIGdldEN1cnJlbmNpZXMoKXtcclxuXHJcbiAgICAvLyBsb2FkIGFsbCBjdXJyZW5jaWVzXHJcbiAgICBjb25zdCBnZXRDdXJyZW5jaWVzID0gZmV0Y2goYCR7YXBpfS9jdXJyZW5jaWVzP2FwaUtleT0ke2tleX1gKTtcclxuICAgIGdldEN1cnJlbmNpZXMudGhlbihyZXNwb25zZT0+e1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KS50aGVuKGN1cnJlbmNpZXM9PntcclxuXHJcbiAgICAgICAgaWYoY3VycmVuY2llcy5lcnJvcikgdGhyb3cgbmV3IEVycm9yKCdmcmVlIGFwaSBsaW1pdCByZWFjaGVkJyk7IC8vIGN1cnJlbmNpZXMuZXJyb3IgY291bGQgYmUgXCJmcmVlIGFwaSBsaW1pdCByZWFjaGVkXCJcclxuXHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGN1cnJlbmNpZXMgaW4gYW4gYXJyYXkgc28gd2UgY2FuIHNvcnQgaXQgYWxwaGFiZXRpY2FsbHlcclxuICAgICAgICBsZXQgYXJyID0gT2JqZWN0LmtleXMoY3VycmVuY2llcy5yZXN1bHRzKTtcclxuICAgICAgICBhcnIgPSBhcnIuc29ydCgpO1xyXG4gICAgICAgIGxldCBpZCA9IDA7XHJcbiAgICAgICAgbGV0IHNlbEluZGV4ID0gMDtcclxuICAgICAgICBmb3IobGV0IGtleSBvZiBhcnIpe1xyXG4gICAgICAgICAgICBsZXQgY3VycmVuY3kgPSBjdXJyZW5jaWVzLnJlc3VsdHNba2V5XTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xyXG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBjdXJyZW5jeS5pZC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdkYXRhLWlkJywgKytpZCk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaW1hZ2UnLCBgJHtpbWFnZX0vJHtjdXJyZW5jeS5pZC50b0xvd2VyQ2FzZSgpfS5wbmdgKTtcclxuICAgICAgICAgICAgb3B0aW9uLnRleHQgPSBjdXJyZW5jeS5pZDtcclxuICAgICAgICAgICAgc2VsVG8uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICAgICAgLy8gdXNlIHVzZCBhcyBzZWxlY3RlZCBpbmRleFxyXG4gICAgICAgICAgICBpZihjdXJyZW5jeS5pZCA9PSAnVVNEJyl7XHJcbiAgICAgICAgICAgICAgICBzZWxJbmRleCA9IGlkIC0gMTtcclxuICAgICAgICAgICAgICAgIHNlbFRvLnNlbGVjdGVkSW5kZXggPSBzZWxJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY3VycmVuY2llcztcclxuICAgIH0pLnRoZW4oY3VycmVuY2llcz0+e1xyXG4gICAgICAgIGxldCBhcnIgPSBPYmplY3Qua2V5cyhjdXJyZW5jaWVzLnJlc3VsdHMpO1xyXG4gICAgICAgIGFyciA9IGFyci5zb3J0KCk7XHJcbiAgICAgICAgbGV0IGlkID0gMDtcclxuICAgICAgICBsZXQgc2VsSW5kZXggPSAwO1xyXG4gICAgICAgIGZvcihsZXQga2V5IG9mIGFycil7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW5jeSA9IGN1cnJlbmNpZXMucmVzdWx0c1trZXldO1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XHJcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IGN1cnJlbmN5LmlkLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtaWQnLCArK2lkKTtcclxuICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnZGF0YS1pbWFnZScsIGAke2ltYWdlfS8ke2N1cnJlbmN5LmlkLnRvTG93ZXJDYXNlKCl9LnBuZ2ApO1xyXG4gICAgICAgICAgICBvcHRpb24udGV4dCA9IGN1cnJlbmN5LmlkO1xyXG4gICAgICAgICAgICBzZWxGcm9tLmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICAgICAgICAgIC8vIHVzZSB1c2QgYXMgc2VsZWN0ZWQgaW5kZXhcclxuICAgICAgICAgICAgaWYoY3VycmVuY3kuaWQgPT0gJ0dCUCcpe1xyXG4gICAgICAgICAgICAgICAgc2VsSW5kZXggPSBpZCAtIDE7XHJcbiAgICAgICAgICAgICAgICBzZWxGcm9tLnNlbGVjdGVkSW5kZXggPSBzZWxJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9KS50aGVuKCgpPT57XHJcbiAgICAgICAgLy8gcmUgaW5zdGFudGlhdGUgdGhlIHNlbGVjdCBqcyBjbGFzcyB0byB1cGRhdGUgdGhlIGN1c3RvbSBzZWxlY3QgZGl2IHdpdGggY3VycmVuY2llc1xyXG4gICAgICAgIHJldHVybiBuZXcgU2VsZWN0anMoKTtcclxuICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbyhlcnIpO1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB0aW1lRGlmZih0aGVuKXtcclxuICAgIGlmKCF0aGVuKSB0aHJvdyBuZXcgRXJyb3IoJ3BhcmFtZXRlciAxIHJlcXVpcmVkJyk7XHJcbiAgICBpZiAoIXRoZW4gaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiB0aGVuICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IEVycm9yKCdwYXJhbWV0ZXIgMSBzaG91bGQgYmUgYW4gaW5zdGFuY2Ugb2YgRGF0ZSBvciBhIG51bWJlciB0eXBlJyk7XHJcbiAgICBsZXQgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICB0aGVuID0gdGhlbiBpbnN0YW5jZW9mIERhdGUgPyB0aGVuLmdldFRpbWUoKSA6IHRoZW47XHJcbiAgICBsZXQgc2VjRGlmZiA9IHBhcnNlSW50KChub3cgLSB0aGVuKSAvIDEwMDApOyAvL2NvbnZlcnQgZnJvbSBtaWxsaXNlY29uZHMgdG8gc2Vjb25kc1xyXG4gICAgbGV0IHBlck1pbiA9IDYwO1xyXG4gICAgbGV0IHBlckhvdXIgPSBwZXJNaW4gKiA2MDtcclxuICAgIGxldCBwZXJEYXkgPSBwZXJIb3VyICogMjQ7XHJcbiAgICBsZXQgcGVyV2VlayA9IHBlckRheSAqIDc7XHJcbiAgICBsZXQgcGVyTW9udGggPSBwZXJXZWVrICogNDtcclxuICAgIGxldCBwZXJZZWFyID0gcGVyTW9udGggKiAxMjtcclxuICAgIFxyXG4gICAgbGV0IHRpbWVEaWZmO1xyXG4gICAgXHJcbiAgICBzd2l0Y2godHJ1ZSl7XHJcbiAgICAgICAgY2FzZSBzZWNEaWZmID09PSAwOlxyXG4gICAgICAgICAgICB0aW1lRGlmZiA9ICdub3cnO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHNlY0RpZmYgPCBwZXJNaW46IC8vIGxlc3MgdGhhbiBhIG1pblxyXG4gICAgICAgICAgICB0aW1lRGlmZiA9IGAke3NlY0RpZmZ9cyBhZ29gO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIHNlY0RpZmYgPCBwZXJIb3VyOiAvLyBsZXNzIHRoYW4gYW4gaG91clxyXG4gICAgICAgICAgICB0aW1lRGlmZiA9IGAke3BhcnNlSW50KHNlY0RpZmYvcGVyTWluKX1tIGFnb2A7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Ugc2VjRGlmZiA8IHBlckRheTogLy8gbGVzcyB0aGFuIGEgZGF5XHJcbiAgICAgICAgICAgIHRpbWVEaWZmID0gYCR7cGFyc2VJbnQoc2VjRGlmZi9wZXJIb3VyKX1oIGFnb2A7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Ugc2VjRGlmZiA8IHBlcldlZWs6XHJcbiAgICAgICAgICAgIHRpbWVEaWZmID0gYCR7cGFyc2VJbnQoc2VjRGlmZi9wZXJEYXkpfWQgYWdvYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzZWNEaWZmIDwgcGVyTW9udGg6XHJcbiAgICAgICAgICAgIHRpbWVEaWZmID0gYCR7cGFyc2VJbnQoc2VjRGlmZi9wZXJXZWVrKX13IGFnb2A7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2Ugc2VjRGlmZiA8IHBlclllYXI6XHJcbiAgICAgICAgICAgIHRpbWVEaWZmID0gYCR7cGFyc2VJbnQoc2VjRGlmZi9wZXJXZWVrKX1tdGggYWdvYDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBzZWNEaWZmID49IHBlclllYXI6XHJcbiAgICAgICAgICAgIHRpbWVEaWZmID0gYCR7cGFyc2VJbnQoc2VjRGlmZi9wZXJZZWFyKX15IGFnb2A7XHJcbiAgICAgICAgICAgIC8vQHRvZG8gZ2V0IHN0dWZmcyBsaWtlIDF5Nm10aCBhZ29cclxuICAgICAgICAgICAgLy90aXA6IGlmIHNlY0RpZmYvcGVyWWVhciBpcyBub3QgYSB3aG9sZSBudW1iZXIgdGhlbiBjb252ZXJ0IHRoZSByZW1haW5pbmcgZGVjaW1hbCB0byBtb250aHNcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGltZURpZmY7XHJcbn0iXSwiZmlsZSI6ImNvbnZlcnRlci5qcyJ9

"use strict";

document.addEventListener('DOMContentLoaded', function () {
  database(); //start the database

  getCurrencies(); // update the selector with currencies from the api
  // convert currencies when selection has changed

  var selects = document.querySelectorAll('.select-js select');
  selects.forEach(function (sel) {
    sel.addEventListener('change', function (e) {
      return convertCurrency();
    });
  }); // add event listenter to convert currency when button is clicked

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJkYXRhYmFzZSIsImdldEN1cnJlbmNpZXMiLCJzZWxlY3RzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJzZWwiLCJlIiwiY29udmVydEN1cnJlbmN5IiwiYnV0dG9ucyIsIkNvbnRyb2wiLCJidXR0b24iLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJnZXRBdHRyaWJ1dGUiLCJtYXRjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVTtBQUVwREMsRUFBQUEsUUFBUSxHQUY0QyxDQUV4Qzs7QUFFWkMsRUFBQUEsYUFBYSxHQUp1QyxDQUluQztBQUVqQjs7QUFDQSxNQUFNQyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsbUJBQTFCLENBQWhCO0FBQ0FELEVBQUFBLE9BQU8sQ0FBQ0UsT0FBUixDQUFnQixVQUFBQyxHQUFHLEVBQUU7QUFDakJBLElBQUFBLEdBQUcsQ0FBQ04sZ0JBQUosQ0FBcUIsUUFBckIsRUFBOEIsVUFBQ08sQ0FBRCxFQUFLO0FBQy9CLGFBQU9DLGVBQWUsRUFBdEI7QUFDSCxLQUZEO0FBR0gsR0FKRCxFQVJvRCxDQWFwRDs7QUFDQSxNQUFNQyxPQUFPLEdBQUdWLFFBQVEsQ0FBQ0ssZ0JBQVQsQ0FBMEIsK0JBQTFCLENBQWhCO0FBRUEsTUFBSU0sT0FBSixHQWhCb0QsQ0FnQnJDOztBQUVmRCxFQUFBQSxPQUFPLENBQUNKLE9BQVIsQ0FBZ0IsVUFBQU0sTUFBTSxFQUFFO0FBQ3BCQSxJQUFBQSxNQUFNLENBQUNYLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQUFPLENBQUMsRUFBRztBQUNqQ0EsTUFBQUEsQ0FBQyxDQUFDSyxlQUFGO0FBQ0FMLE1BQUFBLENBQUMsQ0FBQ00sY0FBRjtBQUNBLFVBQUlDLElBQUksR0FBR0gsTUFBTSxDQUFDSSxZQUFQLENBQW9CLGFBQXBCLENBQVg7O0FBQ0EsVUFBR0QsSUFBSSxDQUFDRSxLQUFMLENBQVcsNEJBQVgsQ0FBSCxFQUE0QztBQUN4Q1IsUUFBQUEsZUFBZTtBQUNsQjtBQUNKLEtBUEQ7QUFRSCxHQVREO0FBVUgsQ0E1QkQiLCJzb3VyY2VzQ29udGVudCI6WyJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBkYXRhYmFzZSgpOyAvL3N0YXJ0IHRoZSBkYXRhYmFzZVxyXG5cclxuICAgIGdldEN1cnJlbmNpZXMoKTsgLy8gdXBkYXRlIHRoZSBzZWxlY3RvciB3aXRoIGN1cnJlbmNpZXMgZnJvbSB0aGUgYXBpXHJcblxyXG4gICAgLy8gY29udmVydCBjdXJyZW5jaWVzIHdoZW4gc2VsZWN0aW9uIGhhcyBjaGFuZ2VkXHJcbiAgICBjb25zdCBzZWxlY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdC1qcyBzZWxlY3QnKTtcclxuICAgIHNlbGVjdHMuZm9yRWFjaChzZWw9PntcclxuICAgICAgICBzZWwuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywoZSk9PntcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnZlcnRDdXJyZW5jeSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC8vIGFkZCBldmVudCBsaXN0ZW50ZXIgdG8gY29udmVydCBjdXJyZW5jeSB3aGVuIGJ1dHRvbiBpcyBjbGlja2VkXHJcbiAgICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNvbnRyb2xzIGJ1dHRvbltkYXRhLWJ1dHRvbl0nKTtcclxuICAgIFxyXG4gICAgbmV3IENvbnRyb2woKTsgLy8gc2V0IHVwIHRoZSBjb250cm9sIGJ1dHRvbnNcclxuXHJcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uPT57XHJcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PntcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtYnV0dG9uJyk7XHJcbiAgICAgICAgICAgIGlmKGRhdGEubWF0Y2goL15bMC05XXxcXC58Y2xlYXJ8YmFja3NwYWNlJC8pKXtcclxuICAgICAgICAgICAgICAgIGNvbnZlcnRDdXJyZW5jeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7Il0sImZpbGUiOiJhcHAuanMifQ==
