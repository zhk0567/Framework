import { useId, useRef, useState, type FormEvent } from 'react'

export function FormAccessDemo() {
  const id = useId()
  const nameId = `${id}-name`
  const emailId = `${id}-email`
  const nameRef = useRef<HTMLInputElement>(null)
  const [submitted, setSubmitted] = useState<string | null>(null)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value
    setSubmitted(`已记录（演示）：${name} / ${email}`)
    nameRef.current?.focus()
  }

  return (
    <section
      className="panel demo-form"
      id="section-form"
      aria-labelledby="form-heading"
    >
      <div className="panel-head">
        <h2 id="form-heading">表单与可访问性</h2>
        <p className="panel-desc">
          <code>useId</code> 生成稳定、去重的 <code>id</code>，适合 label 与控件关联；
          提交后用 <code>useRef</code> 将焦点移回姓名输入框。
        </p>
      </div>
      <form className="demo-form-fields" onSubmit={onSubmit}>
        <div className="demo-form-row">
          <label htmlFor={nameId}>姓名</label>
          <input
            ref={nameRef}
            id={nameId}
            className="todo-input"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="张三"
            required
          />
        </div>
        <div className="demo-form-row">
          <label htmlFor={emailId}>邮箱</label>
          <input
            id={emailId}
            className="todo-input"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <button type="submit" className="btn primary">
          提交（演示）
        </button>
      </form>
      {submitted && (
        <p className="demo-form-msg" role="status">
          {submitted}
        </p>
      )}
    </section>
  )
}
