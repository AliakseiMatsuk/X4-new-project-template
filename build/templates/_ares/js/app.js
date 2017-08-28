var my_news = [
  {
    author: 'Саша Печкин',
    text: 'В четчерг, четвертого числа...',
    bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
  },
  {
    author: 'Просто Вася',
    text: 'Считаю, что $ должен стоить 35 рублей!',
    bigText: 'А евро 42!'
  },
  {
    author: 'Гость',
    text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
    bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
  }
];

var Article = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      bigText: React.PropTypes.string.isRequired
    })
  },
  getInitialState: function() {
    return {
      isOpen: false
    };
  },
  toggleOpen: function(e) {
    this.setState({
      isOpen: !this.state.isOpen
    });
  },
  render: function() {
    var author = this.props.data.author,
        isOpen = this.state.isOpen;
    return (
      <div className='article'>
        <p className='news__author'>{author}:</p>
        {this.getBody()}
        <button
          onClick={this.toggleOpen}>
          {isOpen ? 'Скрыть' : 'Подробнее...'}
        </button>
      </div>
    )
  },
  getBody: function () {
    var text = this.props.data.text,
        bigText = this.props.data.bigText;
    if(!this.state.isOpen) {
      return  <p className='news__text'>{text}</p>
    } else {
      return <p className='news__big-text'>{bigText}</p>
    }
  }
});

var News = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },
  render: function() {
    var data = this.props.data;
    var newsTemplate;

    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        )
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>
    }

    return (
      <div className='news'>
        {newsTemplate}
        <strong className={'news__count ' + (data.length > 0 ? '':'none') }>Всего новостей: {data.length}</strong>
      </div>
    );
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className='app'>
        <h3>Новости</h3>
        <News data={my_news} />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15X25ld3MgPSBbXHJcbiAge1xyXG4gICAgYXV0aG9yOiAn0KHQsNGI0LAg0J/QtdGH0LrQuNC9JyxcclxuICAgIHRleHQ6ICfQkiDRh9C10YLRh9C10YDQsywg0YfQtdGC0LLQtdGA0YLQvtCz0L4g0YfQuNGB0LvQsC4uLicsXHJcbiAgICBiaWdUZXh0OiAn0LIg0YfQtdGC0YvRgNC1INGBINGH0LXRgtCy0LXRgNGC0YzRjiDRh9Cw0YHQsCDRh9C10YLRi9GA0LUg0YfRkdGA0L3QtdC90YzQutC40YUg0YfRg9C80LDQt9C10L3RjNC60LjRhSDRh9C10YDRgtGR0L3QutCwINGH0LXRgNGC0LjQu9C4INGH0ZHRgNC90YvQvNC4INGH0LXRgNC90LjQu9Cw0LzQuCDRh9C10YDRgtGR0LYuJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgYXV0aG9yOiAn0J/RgNC+0YHRgtC+INCS0LDRgdGPJyxcclxuICAgIHRleHQ6ICfQodGH0LjRgtCw0Y4sINGH0YLQviAkINC00L7Qu9C20LXQvSDRgdGC0L7QuNGC0YwgMzUg0YDRg9Cx0LvQtdC5IScsXHJcbiAgICBiaWdUZXh0OiAn0JAg0LXQstGA0L4gNDIhJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgYXV0aG9yOiAn0JPQvtGB0YLRjCcsXHJcbiAgICB0ZXh0OiAn0JHQtdGB0L/Qu9Cw0YLQvdC+LiDQodC60LDRh9Cw0YLRjC4g0JvRg9GH0YjQuNC5INGB0LDQudGCIC0gaHR0cDovL2xvY2FsaG9zdDozMDAwJyxcclxuICAgIGJpZ1RleHQ6ICfQndCwINGB0LDQvNC+0Lwg0LTQtdC70LUg0L/Qu9Cw0YLQvdC+LCDQv9GA0L7RgdGC0L4g0L3Rg9C20L3QviDQv9GA0L7Rh9C40YLQsNGC0Ywg0L7Rh9C10L3RjCDQtNC70LjQvdC90L7QtSDQu9C40YbQtdC90LfQuNC+0L3QvdC+0LUg0YHQvtCz0LvQsNGI0LXQvdC40LUnXHJcbiAgfVxyXG5dO1xyXG5cclxudmFyIEFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcHJvcFR5cGVzOiB7XHJcbiAgICBkYXRhOiBSZWFjdC5Qcm9wVHlwZXMuc2hhcGUoe1xyXG4gICAgICBhdXRob3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICAgICAgdGV4dDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gICAgICBiaWdUZXh0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcclxuICAgIH0pXHJcbiAgfSxcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNPcGVuOiBmYWxzZVxyXG4gICAgfTtcclxuICB9LFxyXG4gIHRvZ2dsZU9wZW46IGZ1bmN0aW9uKGUpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBpc09wZW46ICF0aGlzLnN0YXRlLmlzT3BlblxyXG4gICAgfSk7XHJcbiAgfSxcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGF1dGhvciA9IHRoaXMucHJvcHMuZGF0YS5hdXRob3IsXHJcbiAgICAgICAgaXNPcGVuID0gdGhpcy5zdGF0ZS5pc09wZW47XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYXJ0aWNsZSc+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPSduZXdzX19hdXRob3InPnthdXRob3J9OjwvcD5cclxuICAgICAgICB7dGhpcy5nZXRCb2R5KCl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVPcGVufT5cclxuICAgICAgICAgIHtpc09wZW4gPyAn0KHQutGA0YvRgtGMJyA6ICfQn9C+0LTRgNC+0LHQvdC10LUuLi4nfVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9LFxyXG4gIGdldEJvZHk6IGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciB0ZXh0ID0gdGhpcy5wcm9wcy5kYXRhLnRleHQsXHJcbiAgICAgICAgYmlnVGV4dCA9IHRoaXMucHJvcHMuZGF0YS5iaWdUZXh0O1xyXG4gICAgaWYoIXRoaXMuc3RhdGUuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybiAgPHAgY2xhc3NOYW1lPSduZXdzX190ZXh0Jz57dGV4dH08L3A+XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPSduZXdzX19iaWctdGV4dCc+e2JpZ1RleHR9PC9wPlxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG52YXIgTmV3cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICBwcm9wVHlwZXM6IHtcclxuICAgIGRhdGE6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXHJcbiAgfSxcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgdmFyIGRhdGEgPSB0aGlzLnByb3BzLmRhdGE7XHJcbiAgICB2YXIgbmV3c1RlbXBsYXRlO1xyXG5cclxuICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgbmV3c1RlbXBsYXRlID0gZGF0YS5tYXAoZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgPEFydGljbGUgZGF0YT17aXRlbX0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld3NUZW1wbGF0ZSA9IDxwPtCaINGB0L7QttCw0LvQtdC90LjRjiDQvdC+0LLQvtGB0YLQtdC5INC90LXRgjwvcD5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbmV3cyc+XHJcbiAgICAgICAge25ld3NUZW1wbGF0ZX1cclxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17J25ld3NfX2NvdW50ICcgKyAoZGF0YS5sZW5ndGggPiAwID8gJyc6J25vbmUnKSB9PtCS0YHQtdCz0L4g0L3QvtCy0L7RgdGC0LXQuToge2RhdGEubGVuZ3RofTwvc3Ryb25nPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59KTtcclxuXHJcbnZhciBBcHAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdhcHAnPlxyXG4gICAgICAgIDxoMz7QndC+0LLQvtGB0YLQuDwvaDM+XHJcbiAgICAgICAgPE5ld3MgZGF0YT17bXlfbmV3c30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEFwcCAvPixcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXHJcbik7Il19
