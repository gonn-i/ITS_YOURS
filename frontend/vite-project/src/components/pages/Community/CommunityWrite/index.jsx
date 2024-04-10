import React, { useState, useRef } from 'react';
import CommuHeader from '../components/CommuHeader';
import { Box, WriteForm, InputBox, InputTitle, InputContent } from './WriteStyle';
import { Button } from '../CommunityList/CommunityStyle';
import { ProductImg, ButtonUpload } from '../../../WriteFrom/WriteFormStyle';

function CommuWrite() {
	const [imgUrl, setImgUrl] = useState('');
	const [writeCommu, setWriteCommu] = useState({
		title: '',
		context: '',
		img: '',
	});

	const fileInputRef = useRef(null);

	const handleInputChange = e => {
		const { name, value } = e.target;
		setWriteCommu({ ...writeCommu, [name]: value });
	};

	const handleImageChange = e => {
		const file = e.target.files[0];
		const reader = new FileReader();
		reader.onload = () => {
			setImgUrl(reader.result);
			setWriteCommu({ ...writeCommu, img: reader.result });
		};

		if (file) {
			reader.readAsDataURL(file);
		}
	};

	const handleClick = () => {
		fileInputRef.current.click();
	};

	const handleSubmit = () => {
		console.log(writeCommu);
	};

	return (
		<Box>
			<CommuHeader />
			<WriteForm>
				<InputBox>
					<InputTitle
						placeholder="제목을 입력해주세요"
						name="title"
						value={writeCommu.title}
						onChange={handleInputChange}
					/>
					<InputContent
						placeholder="글 내용을 입력해주세요"
						name="context"
						value={writeCommu.context}
						onChange={handleInputChange}
					/>
					<div className="InputPics">
						<ButtonUpload onClick={handleClick}>
							{imgUrl ? <img src={imgUrl} alt="Uploaded Image" /> : ' 📸 Upload a file'}
						</ButtonUpload>
						<input
							type="file"
							ref={fileInputRef}
							onChange={handleImageChange}
							style={{ display: 'none' }}
						/>
					</div>
				</InputBox>
				<div className="Button">
					<Button onClick={handleSubmit}>등록하기</Button>
				</div>
			</WriteForm>
		</Box>
	);
}

export default CommuWrite;