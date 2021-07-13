import React, {useState, useEffect} from "react";
import styles from "../styles/Contact.module.css";
const Contact = () => {
	const [sent, setSent] = useState(false);
	const [alert, setAlert] = useState(false);
	const done = () => {
		setAlert(true);
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, [2000]);
		return () => clearTimeout(timeout);
	}, [alert]);

	const sendEmail = e => {
		e.preventDefault();
		emailjs.sendForm(
				"service_2gswzwv",
				"template_2gamusm",
				e.target,
				"user_BoL6jhzMm2dNvVpf04Zck"
			)
			.then(
				result => {
					console.log(result.text);
				},
				error => {
					console.log(error.text);
				}
			);
		e.target.reset();
		setSent(true);
	};

	return (
		<>
			{alert && (
				<div
					className='d-flex justify-content-center text-white'
					style={{backgroundColor: "black"}}
				>
					Email Sent!
				</div>
			)}
			<div className={`mx-auto ${styles.form}`}>
				<div data-aos='zoom-in-right' className={styles.imgBg}>
					<img
						className={styles.imgForm}
						src={sent ? "/images/sent.jpg" : "/images/sent.jpg"}
						alt='Snow'
					/>
					<div className={styles.center}>
						<h2>Address: Baluwatar, Kathmandu</h2>
						<h2>sirjeettamrakar007@gmail.com</h2>
						<h2>9860913929</h2>
					</div>
				</div>
				<form
					data-aos='zoom-in-left'
					className={`mx-auto ${styles.w}`}
					onSubmit={sendEmail}
				>
					<h2 className={styles.head}>Contact</h2>
					<input
						className={styles.input}
						title='Name'
						name='name'
						type='text'
						placeholder='Your Name'
						required
					/>
					<input
						className={styles.input}
						title='Email'
						name='email'
						type='email'
						placeholder='Your Email'
						required
					/>
					<input
						className={styles.input}
						title='Subject'
						name='subject'
						type='text'
						placeholder='Subject'
						required
					/>
					<textarea
						className={styles.input}
						title='Message'
						name='message'
						type='text'
						placeholder='Message'
						required
					/>
					<button
						className={`btn btn-danger ${styles.submit}`}
						type='submit'
						onClick={() => done()}
					>
						Send Email
					</button>
				</form>
			</div>
			<div className={styles.bg} />
		</>
	);
};

export default Contact;
