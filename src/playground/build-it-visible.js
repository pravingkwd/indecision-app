class Visiblity extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            visiblity : false
        }

        this.handelToggleVisiblity = this.handelToggleVisiblity.bind(this); 
    }

    handelToggleVisiblity() {
      this.setState(
          (prevState)=>{
              return { visiblity : !prevState.visiblity  }
          }
      )      

    }

    render() {
        return (
            <div>
            <h1>Visiblity Toogle</h1>
            <button onClick={this.handelToggleVisiblity} >{ this.state.visiblity ? 'Hide Details' : 'Show Details' }</button>
            {
                this.state.visiblity  && (
                    <div>
                    <p>Het , Content are visible</p>
                    </div>
                )
            }
            </div>
        );
    }

}

ReactDOM.render(<Visiblity />, document.getElementById('app'));



/*let visiblity = false;

const onMakeToggle = () => {
    visiblity = !visiblity;
    render();
}

const render = () => {

    const template = (

        <div>
        <h1>Visiblity Toggle</h1>
        <button onClick={onMakeToggle}>{ visiblity ? 'Hide Details' : 'Show Details'}</button>
        { visiblity && (
            <div>
            <p>Hey,Content are visible</p>
            </div>
        ) }
        </div>
    );

    ReactDOM.render(template,document.getElementById('app'));

}

render();
*/