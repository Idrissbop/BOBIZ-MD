import { useState } from "react"; import { motion } from "framer-motion";

export default function App() { const [mode, setMode] = useState("login");

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white"> <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8" > <h1 className="text-3xl font-bold text-center mb-2">DREAM ROLE PLAY</h1> <p className="text-center text-sm text-gray-300 mb-6"> عالمك الخاص لتجربة Role Play احترافية </p>

<div className="flex justify-center mb-6">
      <button
        onClick={() => setMode("login")}
        className={`px-4 py-2 rounded-l-xl ${mode === "login" ? "bg-indigo-600" : "bg-white/10"}`}
      >
        تسجيل الدخول
      </button>
      <button
        onClick={() => setMode("register")}
        className={`px-4 py-2 rounded-r-xl ${mode === "register" ? "bg-indigo-600" : "bg-white/10"}`}
      >
        إنشاء حساب
      </button>
    </div>

    {mode === "login" ? (
      <motion.form
        key="login"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="اسم المستخدم"
          className="w-full p-3 rounded-xl bg-black/40 focus:outline-none"
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full p-3 rounded-xl bg-black/40 focus:outline-none"
        />
        <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
          دخول
        </button>
      </motion.form>
    ) : (
      <motion.form
        key="register"
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="space-y-4"
      >
        <input
          type="text"
          placeholder="اسم المستخدم"
          className="w-full p-3 rounded-xl bg-black/40 focus:outline-none"
        />
        <input
          type="email"
          placeholder="البريد الإلكتروني"
          className="w-full p-3 rounded-xl bg-black/40 focus:outline-none"
        />
        <input
          type="password"
          placeholder="كلمة المرور"
          className="w-full p-3 rounded-xl bg-black/40 focus:outline-none"
        />
        <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition">
          إنشاء حساب
        </button>
      </motion.form>
    )}

    <div className="mt-6 text-center text-xs text-gray-400">
      © 2026 DREAM ROLE PLAY – All Rights Reserved
    </div>
  </motion.div>
</div>

); }
