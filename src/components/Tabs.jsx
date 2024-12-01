export function Tabs(props){

    const {todos,selecttab, setselecttab}=props;


    const tabs=['all','Open','Completed'];
    return(
        <nav className="tab-container">
            {
                tabs.map((tab,tabindex)=>{

                    const numoftask=tab=="all"?todos.length:tab=="Open"?todos.filter(val=>!val.complete).length:todos.filter(val=>val.complete).length
                    return(
                        <button key={tabindex} className={"tab-button" + (selecttab==tab? 'tab-selected':'')}
                        onClick={()=>setselecttab(tab)}>
                            <h4>{tab}<span>( {numoftask} )</span></h4>
                        </button>

                    )
                })
            }
        </nav>
    )
}