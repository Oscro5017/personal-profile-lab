import React, { useState } from 'react';
import './ProfileCard.css';

function ProfileCard({ profile }) {
    // 🔹 Theme state
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 🔹 Challenge 3 states
    const [viewCount, setViewCount] = useState(0);
    const [favoriteHobbies, setFavoriteHobbies] = useState([]);
    const [showContactForm, setShowContactForm] = useState(false);
    const [contactMessage, setContactMessage] = useState("");

    // ✅ Toggle theme
    const toggleTheme = () => setIsDarkMode(!isDarkMode);

    // ✅ Card class
    const cardClassName = `profile-card ${isDarkMode ? 'dark-mode' : 'light-mode'}`;

    // ✅ Avatar (initials)
    const getInitials = (name) =>
        name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase();

    // ✅ เพิ่ม view count เมื่อคลิกที่การ์ด
    const handleCardClick = () => {
        setViewCount(viewCount + 1);
    };

    // ✅ เพิ่ม/ลบ hobby ที่ชอบ
    const toggleFavoriteHobby = (hobby) => {
        setFavoriteHobbies((prev) =>
            prev.includes(hobby)
                ? prev.filter(h => h !== hobby)
                : [...prev, hobby]
        );
    };

    // ✅ แสดง/ซ่อน contact form
    const handleContactClick = () => {
        setShowContactForm(!showContactForm);
    };

    // ✅ ส่งข้อความ (แทน alert)
    const handleSubmitContact = (e) => {
        e.preventDefault();
        alert(`ส่งข้อความถึง ${profile.name}: "${contactMessage}"`);
        setContactMessage("");
        setShowContactForm(false);
    };

    // ✅ Skill click
    const handleSkillClick = (skill) => {
        alert(`${profile.name} มีความเชี่ยวชาญใน ${skill}!`);
    };

    return (
        <div className={cardClassName} onClick={handleCardClick}>
            {/* 👁️ View Counter */}
            <div className="view-counter">
                👁️ Views: {viewCount}
            </div>

            {/* Header */}
            <div className="profile-header">
                <div className="profile-avatar">{getInitials(profile.name)}</div>
                <h1 className="profile-name">{profile.name}</h1>
                <div className="student-id">{profile.studentId}</div>

                <button className="theme-toggle" onClick={(e) => {
                    e.stopPropagation();
                    toggleTheme();
                }}>
                    {isDarkMode ? '🌙' : '☀️'}
                </button>
            </div>

            {/* Basic Info */}
            <div className="profile-info">
                <div className="info-item"><div className="info-label">สาขา</div><div className="info-value">{profile.major}</div></div>
                <div className="info-item"><div className="info-label">ชั้นปี</div><div className="info-value">{profile.year}</div></div>
                <div className="info-item"><div className="info-label">อายุ</div><div className="info-value">{profile.age} ปี</div></div>
                <div className="info-item"><div className="info-label">เกรดเฉลี่ย</div><div className="info-value">{profile.gpa.toFixed(2)} {profile.gpa >= 3.5 && '🌟'}</div></div>
            </div>

            {/* Achievements */}
            <div className="profile-section">
                <h3>🏆 Achievements</h3>
                <div className="achievements">
                    {profile.gpa >= 3.5 && <span className="achievement-badge">🌟 เกียรตินิยม</span>}
                    {profile.skills.length >= 5 && <span className="achievement-badge">💪 Multi-skilled</span>}
                    {favoriteHobbies.length >= 3 && <span className="achievement-badge">💖 Passionate</span>}
                </div>
            </div>

            {/* 🎯 Hobbies (Interactive) */}
            <div className="profile-section">
                <h3>🎯 งานอดิเรก</h3>
                <ul className="hobbies-list">
                    {profile.hobbies.map((hobby, index) => (
                        <li
                            key={index}
                            className={`hobby-item ${favoriteHobbies.includes(hobby) ? 'favorite' : ''}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFavoriteHobby(hobby);
                            }}
                        >
                            {hobby} {favoriteHobbies.includes(hobby) && '💖'}
                        </li>
                    ))}
                </ul>
            </div>

            {/* 💻 Skills */}
            <div className="profile-section">
                <h3>💻 ทักษะ</h3>
                <div className="skills">
                    {profile.skills.map((skill, index) => (
                        <div
                            key={index}
                            className="skill-tag"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleSkillClick(skill);
                            }}
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            {/* 🌐 Social Links */}
            {profile.socialLinks && profile.socialLinks.length > 0 && (
                <div className="profile-section">
                    <h3>🌐 Social Media</h3>
                    <div className="social-links">
                        {profile.socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                onClick={(e) => e.stopPropagation()}
                            >
                                {link.platform}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            {/* 📧 Contact Button */}
            <button
                className="contact-button"
                onClick={(e) => {
                    e.stopPropagation();
                    handleContactClick();
                }}
            >
                📧 ติดต่อ {profile.name}
            </button>

            {/* Contact Form */}
            {showContactForm && (
                <div className="contact-form" onClick={(e) => e.stopPropagation()}>
                    <h4>ส่งข้อความถึง {profile.name}</h4>
                    <form onSubmit={handleSubmitContact}>
                        <textarea
                            value={contactMessage}
                            onChange={(e) => setContactMessage(e.target.value)}
                            placeholder="พิมพ์ข้อความที่นี่..."
                            required
                        />
                        <button type="submit">ส่งข้อความ</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ProfileCard;
