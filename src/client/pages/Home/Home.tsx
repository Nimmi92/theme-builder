import React, { useState } from 'react';
import Button from '../../../components/button';
import { RadioButton, RadioButtonLabel, Item } from '../../../components/radioButton';
import { InputBox, InputBoxLabel, InputItem } from '../../../components/inputBox';
import styled, { useTheme } from 'styled-components';

const Container = styled.div`
	margin: 0 20px;
`;

const ThemeSection = styled.div`
	display: flex;
	margin: 0 20px;
`;

const ThemeState = styled.div`
	margin: 0 40px 0 0;
`;

const ButtonContainer = styled.div`
	text-align: center;
`;
const ThemePlayground = styled.div`
`;

const ThemeSelection= styled.div`
`;

const ThemeAction = styled.div`

	width: 600px;
	border: 1px solid #CCCCCC;
	min-height: 100px;
	max-height: 300px;
	overflow-y: scroll;
	height: auto;
	text-align: left;
	padding: ${(props) => props.theme.specs.padding };

	p {
		margin: 2px;
	}
`;

const ThemeOutput = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 600px;
	border: 1px solid #CCCCCC;
	height: 100px;
	text-align: center;
	padding: ${(props) => props.theme.specs.padding };
`;

interface Props {

}

const Home: React.FC = (props: Props) => {
	const theme = useTheme();

	// Default specifications
	const defaultColor = theme.specs.button.enabled.color;
	const defaultBgColor = theme.specs.button.enabled.background;
	const defaultHoverBgColor = theme.specs.button.hover.background;

	const [selectedState, setSelectedState] = useState("enabled");
	const [selectedColor, setSelectedColor] = useState(defaultColor);
	const [selectedBgColor, setSelectedBgColor] = useState(defaultBgColor);
	const [selectedHoverBgColor, setSelectedHoverBgColor] = useState(defaultHoverBgColor);

	const handleBtnClick = (event: React.ChangeEvent<HTMLButtonElement>) => {
		document.querySelector(`.${ThemeAction.styledComponentId}`).innerHTML +="<p>Clicked</p>"
	}

	const handleStateSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSelectedState(value);
	};

	const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSelectedColor(value);
	};

	const handleBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSelectedBgColor(value);
	};

	const handleHoverBgColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSelectedHoverBgColor(value);
	};

	const handleReset = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedColor(defaultColor);
		setSelectedBgColor(defaultBgColor);
		setSelectedHoverBgColor(defaultHoverBgColor);
		resetInputBox(document.querySelectorAll('input[type="text"]'))
	};

	const resetInputBox = (elements: NodeListOf<Element>) => {
		for(let i in elements) {
			elements[i].value = "";
		}
	};

	return (
	<Container>
		<div className="about">
			<h1>Theme builder</h1>
		</div>
		<ThemeSection>
			<ThemeState>
				<ButtonContainer>
					<h3>Enabled State</h3>
					<Button label="OK" onClick={event => event.preventDefault } status="enabled">OK</Button>
				</ButtonContainer>
				<ButtonContainer>
					<h3>Hover State</h3>
					<Button label="OK" onClick={event => event.preventDefault } status="hover">OK</Button>
				</ButtonContainer>
				<ButtonContainer>
					<h3>Focus State</h3>
					<Button label="OK" onClick={event => event.preventDefault } status="focus">OK</Button>
				</ButtonContainer>
				<ButtonContainer>
					<h3>Disabled State</h3>
					<Button label="OK" onClick={event => event.preventDefault } status="disabled">OK</Button>
				</ButtonContainer>
			</ThemeState>
			<ThemePlayground>
				<h3>Playground</h3>
				<ThemeOutput>
					<Button label="OK" onClick={event => handleBtnClick(event)} status={selectedState} color={selectedColor} bgColor={selectedBgColor} hoverBgColor={selectedHoverBgColor}>OK</Button>
				</ThemeOutput>
				<h4>Actions</h4>
				<ThemeAction>
				</ThemeAction>
				<ThemeSelection>
					<h4>States</h4>
					<Item>
						<RadioButton 
						type="radio" 
						name="radio"
						value="enabled"
						checked={selectedState === "enabled"}
						onChange={event => handleStateSelectChange(event)}
						/>
						<RadioButtonLabel />
						<div>enabled</div>
					</Item>
					<Item>
						<RadioButton 
						type="radio" 
						name="radio"
						value="hover"
						checked={selectedState === "hover"}
						onChange={event => handleStateSelectChange(event)}
						/>
						<RadioButtonLabel />
						<div>hover</div>
					</Item>
					<Item>
						<RadioButton 
						type="radio" 
						name="radio"
						value="focus"
						checked={selectedState === "focus"}
						onChange={event => handleStateSelectChange(event)}
						/>
						<RadioButtonLabel />
						<div>focus</div>
					</Item>
					<Item>
						<RadioButton 
						type="radio" 
						name="radio"
						value="disabled"
						checked={selectedState === "disabled"}
						onChange={event => handleStateSelectChange(event)}
						/>
						<RadioButtonLabel />
						<div>disabled</div>
						</Item>
						<h4>Customisations</h4>
						<InputItem>
							<InputBoxLabel>
								<div>Color</div>
							</InputBoxLabel>
							<InputBox
								type="text"
								name="color"
								placeholder="Please enter color in #hexcode"
								onChange={event => handleColorChange(event)}
							>
							</InputBox>
						</InputItem>
						<InputItem>
							<InputBoxLabel>
								<div>Background Color</div>
							</InputBoxLabel>
							<InputBox
								type="text"
								name="color"
								placeholder="Please enter background color in #hexcode"
								onChange={event => handleBgColorChange(event)}
							>
							</InputBox>
						</InputItem>
						<InputItem>
							<InputBoxLabel>
								<div>Hover Background Color</div>
							</InputBoxLabel>
							<InputBox
								type="text"
								name="color"
								placeholder="Please enter hover background color in #hexcode"
								onChange={event => handleHoverBgColorChange(event)}
							>
							</InputBox>
						</InputItem>
				</ThemeSelection>
				<Button label="Reset" status="enabled" onClick={event => handleReset(event)}>Reset</Button>
			</ThemePlayground>
		</ThemeSection>

	</Container>
	)

}

export default Home
