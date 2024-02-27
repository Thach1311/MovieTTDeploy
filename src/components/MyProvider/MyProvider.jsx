import { createContext } from 'react';
export const MContext = createContext();
function MyProvider() {
    return (
        <MContext.Provider
            value={{
                state: this.state,
                setMessage: (value) =>
                    this.setState({
                        message: value,
                    }),
            }}
        >
            {this.props.children} //this indicates that all the child tags with MyProvider as Parent can access the
            global store.
        </MContext.Provider>
    );
}

export default MyProvider;
