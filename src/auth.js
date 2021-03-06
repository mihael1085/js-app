export function getAuthForm() {
	return `
		<form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label">
              <input type="mail" id="email" required>
              <label for="email">Email</label>
            </div>
			<div class="mui-textfield mui-textfield--float-label">
			<input type="password" id="password" required>
			<label for="password">Password</label>
		  </div>
            <button 
              type="submit"
              class="mui-btn mui-btn--raised mui-btn--primary"
              >
              Войтти
            </button>
        </form>
	`
}