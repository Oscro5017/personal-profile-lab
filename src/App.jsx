import React from 'react';
import ProfileCard from './ProfileCard';

function App() {
  // ข้อมูลโปรไฟล์ตัวอย่าง
  const sampleProfile = {
    name: "สมชาย ใจดี",
    studentId: "66130500001",
    major: "วิศวกรรมซอฟต์แวร์",
    year: 3,
    age: 21,
    gpa: 3.75,
    email: "somchai.jaidee@student.university.ac.th",
    hobbies: [
      "เขียนโค้ด",
      "เล่นเกม",
      "ดูหนัง",
      "ฟังเพลง",
      "อ่านหนังสือ"
    ],
    skills: [
      "JavaScript",
      "React.js",
      "HTML/CSS",
      "Python",
      "Git",
      "Node.js"
    ]
  };

  const myProfile = {
    name: "ณัฐพงศ์ จินะปัญญา",
    studentId: "67543210008-8",
    major: "วิศวกรรมซอฟต์แวร์",
    year: 2,
    age: 20,
    gpa: 3.45,
    email: "oscro.art@gmail.com",
    hobbies: [
      "เล่นเกม",
      "ดูหนัง",
      "ฟังเพลง",
      "วาดรูป",
      "ทำอาหาร"
    ],
    skills: [
      "JavaScript",
      "C",
      "HTML/CSS",
      "Python",
      "Git",
      "Java"
    ],
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Oscro5017" },
      { platform: "Facebook", url: "https://www.facebook.com/Oscro.art/?locale=th_TH" },
      { platform: "Tiktok", url: "https://www.tiktok.com/@oscro5017?_t=ZS-90NgLdrWvlH&_r=1" }
    ]
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(45deg, #f0f2f5 0%, #e8eaf6 100%)',
      padding: '20px'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <h1 style={{
          color: '#333',
          fontSize: '32px',
          margin: '20px 0'
        }}>
          🎓 Personal Profile Card
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          Lab 3.1 - ทำความรู้จักกับ React.js และ JSX
        </p>
      </div>

      <ProfileCard profile={sampleProfile} />
      <ProfileCard profile={myProfile} />
      
    </div>
  );
}

export default App;