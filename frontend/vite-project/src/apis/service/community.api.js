import instance from '../axiosInstance';

async function GetCommunnityList() {
	try {
		const res = await instance.get('/community/posts');
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
async function UpdateCommunnity(id, writeCommu) {
	try {
		const res = await instance.put(`/community/posts/${id}`, writeCommu);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}
async function DeleteCommunnity(id) {
	try {
		const res = await instance.delete(`/community/posts/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function GetDetail(id) {
	try {
		const res = await instance.get(`/community/posts/${id}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function Getcommets(id) {
	try {
		const res = await instance.get(`/community/posts/${id}/comment`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function PostCommunity(writeCommu) {
	try {
		const res = await instance.post(`/community/posts`, writeCommu);
		console.log(writeCommu);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function PostComment(newComment, id) {
	try {
		const res = await instance.post(`/community/posts/${id}/comment`, { content: newComment });
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function UpdateComment(newComment, id, commentId) {
	try {
		const res = await instance.put(`/community/posts/${id}/comment/${commentId}`, {
			content: newComment,
		});
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

async function DeleteComment(id, commetId) {
	try {
		const res = await instance.delete(`/community/posts/${id}/comment/${commetId}`);
		return res.data;
	} catch (err) {
		console.log(err);
	}
}

export {
	GetCommunnityList,
	UpdateCommunnity,
	DeleteCommunnity,
	GetDetail,
	Getcommets,
	PostCommunity,
	PostComment,
	UpdateComment,
	DeleteComment,
};
