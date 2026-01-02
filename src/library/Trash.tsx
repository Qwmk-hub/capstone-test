interface RecentFile {
	id: number;
	name: string;
	date: string;
	location: string;
}

import documentIcon from '../assets/icons/document.png';

const recentFiles: RecentFile[] = [
	{ id: 1, name: '회의록 요약본', date: '2025-12-20', location: '팀 폴더/회의 자료' },
	{ id: 2, name: '과제 리서치 노트', date: '2025-12-18', location: '내 드라이브/과제' },
	{ id: 3, name: '프로젝트 계획서', date: '2025-12-15', location: '공유 드라이브/기획' },
];

export default function Recent() {
	return (
		<>
			<div className="library-search">
				<span className="search-icon">🔍</span>
				<input
					type="text"
					placeholder="최근 문서를 검색하세요"
					className="search-input"
				/>
			</div>

			<div className="trash-header">
				<h1 className="library-title">휴지통</h1>
				<button className="empty-trash-btn">휴지통 비우기</button>
			</div>

			<div className="trash-table">
				{recentFiles.map((file) => (
					<div key={file.id} className="trash-card">
						<img src={documentIcon} alt="문서" className="trash-icon" />
						<p className="trash-name">{file.name}</p>
					</div>
				))}
			</div>
		</>
	);
}
