export const WithAuthorization = (WrappedComponents, checkPermissions) => {
     return function(props) {
          return checkPermissions(props) ?
          (
            <WrappedComponents {...props}/>
          ) : ( <>You don't have the permission to access this component</> )
     }
}

export const PrivateComponent = () => {
    return <>This is a private component and should be accessed only by the appropriate admin role</>
}

export const checkPermissions = (props) => {
    return props.userRole === "Admin"
}

