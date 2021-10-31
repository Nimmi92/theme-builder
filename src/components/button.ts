import styled from 'styled-components';

interface ButtonProps {
    lable: string;
	status: string;
    color: string;
    bgColor: string;
    hoverBgColor: string;
}

const Button = styled.button<ButtonProps>`
    border: ${(props) => {
        if(props.status === 'enabled') return props.theme.specs.button.enabled.border;
        if(props.status === 'hover') return props.theme.specs.button.hover.border;
        if(props.status === 'focus') return props.theme.specs.button.focus.border;
        if(props.status === 'disabled') return props.theme.specs.button.disabled.border;
        }
    };
    border-radius: ${(props) => props.theme.specs.borderRadius }; 
    padding: ${(props) => props.theme.specs.padding }; 
    font-size: ${(props) => props.theme.specs.fontSize };
    cursor: ${(props) => {
            if(props.status === 'disabled') return props.theme.specs.button.disabled.cursor;
            return props.theme.specs.cursor;
        }
    };
    color: ${(props) => {
            if(props.status === 'enabled') return props.color || props.theme.specs.button.enabled.color;
            if(props.status === 'hover') return props.color || props.theme.specs.button.hover.color; 
            if(props.status === 'focus') return props.color || props.theme.specs.button.focus.color; 
            if(props.status === 'disabled') return props.color || props.theme.specs.button.disabled.color; 
        }
    };
    background-color: ${(props) => {
            if(props.status === 'enabled') return props.bgColor || props.theme.specs.button.enabled.background;
            if( props.status === 'hover') return props.hoverBgColor || props.theme.specs.button.hover.background; 
            if(props.status === 'focus') return props.hoverBgColor ||  props.theme.specs.button.focus.background; 
            if(props.status === 'disabled') return props.bgColor || props.theme.specs.button.disabled.background; 
        }   
    };
    opacity: ${(props) => {
            if(props.status === 'enabled') return props.theme.specs.button.enabled.opacity;
            if(props.status === 'hover') return props.theme.specs.button.hover.opacity;
            if(props.status === 'focus') return props.theme.specs.button.focus.opacity;
            if(props.status === 'disabled') return props.theme.specs.button.disabled.opacity;
        }
    };
    width: auto;
    min-width: 100px;
`;

export default Button;
