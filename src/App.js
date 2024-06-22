import logo from './logo.svg';
import './App.css';

export const App = () => {
	return (
		// Далее по коду начинается декларативный подход
		// с использованием JSX ситаксиса
		// где мы сразу пишем результат который хотим получить
		// не прибегая к отдельному созданию элементов,
		// назначению классов, атрибутов и внутреннему содержимому.
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload 2.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<span>{new Date().getFullYear()}</span>
			</header>
		</div>
	);
};
