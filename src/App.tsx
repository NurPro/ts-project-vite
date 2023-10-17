import { ChangeEvent, useState } from "react";
import styles from "./home.module.css";
import { data } from "./constants";

const App = () => {
	const [title, setTitle] = useState<string>();
	const [arr, setArr] = useState<IData[]>(data);

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
		setTitle(e.target.value);
	};
	const addHandler = (): void => {
		if (!title?.length) {
			return;
		}
		const newData = {
			title: title,
			id: new Date().getTime(),
			description: "description",
		};
		setArr([...arr, newData]);
		setTitle("");
	};

	const deleteHandler = (id: number) => {
		const updatedArr = arr.filter((item) => item.id !== id);
		setArr(updatedArr);
	};
	return (
		<div className={styles.todo}>
			<h1 className={styles.title}>Todo form </h1>
			<input
				type='text'
				className={styles.input}
				placeholder='Type Todo '
				value={title}
				onChange={inputChangeHandler}
			/>
			<button className={styles.button} onClick={addHandler}>
				Add Todo
			</button>
			<div className={styles.card}>
				{arr.map((arr) => (
					<div key={arr.id} className={styles.cardItem}>
						<p>{arr.title}</p>
						<div className={styles.delBtn}>
							<button onClick={() => deleteHandler(arr.id)}>del</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;
