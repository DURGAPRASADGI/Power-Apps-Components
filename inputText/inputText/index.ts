import * as React from "react";
import * as ReactDOM from "react-dom"
import {createRoot} from "react-dom/client"
import {IInputs, IOutputs} from "./generated/ManifestTypes";
import damocoInput from "./components/Input";
export class inputText implements ComponentFramework.StandardControl<IInputs, IOutputs> {
 private _container:HTMLDivElement;
 private _reactRoot:any;
  
    constructor()
    {

    }

    
    public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
    {
        // Add control initialization code
        this._container = container;
        this._reactRoot = createRoot(this._container);
        
    }


    
    public updateView(context: ComponentFramework.Context<IInputs>): void
    {
        // Add code to update control view
        const size =context.parameters.size.raw || 'default'
        const placeholder=context.parameters.placeholder.raw || 'durga';
        this._reactRoot.render(React.createElement(damocoInput,{placeholder,size}))
    }

   
    public getOutputs(): IOutputs
    {
        return {};
    }

   
    public destroy(): void
    {
        // Add code to cleanup control if necessary
    }
}
