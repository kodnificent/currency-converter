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
