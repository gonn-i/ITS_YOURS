import styled from 'styled-components';

export const SignOutLink = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 20px;
	color: #79747e;
	cursor: pointer;
	font-size: 14px;
	&:hover {
		text-decoration: underline;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 800px;
	margin: 0 auto;
	@media (max-width: 900px) {
		width: 95%;
	}
`;

export const Input = styled.input`
	margin-top: 1rem;
	padding: 0.7rem;
	border: 1px solid #ddd;
	border-radius: 20px;
	width: 100%;
	&::placeholder {
		color: #79747e; // placeholder 글씨 색상을 회색으로 설정
	}
	&:disabled {
		background-color: #f1f1f1; // 비활성화 상태의 배경색도 설정할 수 있습니다.
	}
`;

export const Button = styled.button`
	padding: 0.7rem;
	margin-top: 1rem;
	font-size: 14px;
	width: 100%;
	background-color: #009dff;
	color: white;
	border: none;
	border-radius: 20px;
	cursor: pointer;

	&:hover {
		border-color: #038ee5;
		background-color: #038ee5;
		color: #fff;
		transition: all 0.5s;
	}
`;

export const ErrorMessage = styled.div`
	color: #b3261e;
	font-size: 12px;
	margin-left: 10px;
`;

export const Wrapper = styled.div`
	width: 100%;
	height: 110vh;
	position: relative; /* overflow-y: scroll; */
	.link_wrap {
		width: 248px;
		margin: 0 auto;
		text-align: center;
	}

	.logo_link {
	}

	.sign_logo {
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 50px 0; */
		padding-top: 50px;
	}
	.sign_logo img {
		max-width: 150px;
	}

	.login_container {
		width: 400px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.add_option {
		/* padding: 20px; */
	}

	.profile_form {
		width: 50%;
		margin: 30px auto 0;
	}

	.inline_wrap {
		position: relative;
		display: flex;
		justify-content: center;
	}

	.join_btn {
		width: 100%;
		margin: 0 auto;
		display: block;
		margin-top: 15px;
	}
	@media screen and (max-width: 500px) {
		.login_container {
			width: 90%;
		}
		.profile_form {
			width: 90%;
		}
		.join_btn {
			width: 90%;
		}
	}
`;

export const Title = styled.h1`
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 30px;
	font-size: 48px;
	font-weight: 500;
	line-height: 64px;
	text-align: center;
	margin: 0;

	@media (max-width: 850px) {
		font-size: 36px;
	}
`;

export const ProfileWrapper = styled.div`
	/* position: relative; */
	/* display: flex;
	justify-content: center;
	margin-bottom: 2rem; */
	display: flex;
	justify-content: center;
	height: auto;
	.profile_wrap {
		position: relative;
		width: 120px;
		height: 120px;
		border-radius: 50%;
		object-fit: cover;
		background-color: #009dff;
	}
`;

export const ProfileImage = styled.img`
	width: 100%;
	height: auto;
	width: 120px;
	height: 120px;
	border-radius: 50%;
	object-fit: cover;
`;

export const IconWrapper = styled.label`
	position: absolute;
	right: 0;
	bottom: 0;
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background-color: #ded8e1;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

export const HiddenFileInput = styled.input`
	display: none;
`;

export const IconImage = styled.img`
	width: 20px;
	height: 20px;
`;
