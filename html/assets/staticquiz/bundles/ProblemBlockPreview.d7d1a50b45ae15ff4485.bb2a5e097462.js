!function(t, e) {
    for (var i in e)
        t[i] = e[i]
}(window, webpackJsonp([17], {
    "./common/static/xmodule/modules/js/001-3918b2d4f383c04fed8227cc9f523d6e.js": function(t, e, i) {
        (function(t) {
            (function() {
                (function() {
                    "use strict";
                    this.JavascriptLoader = function() {
                        function e() {}
                        return e.executeModuleScripts = function(e, i) {
                            var o, n, s, r, a;
                            return i || (i = null),
                            a = e.find(".script_placeholder"),
                            0 === a.length ? (null !== i && i(),
                            []) : (n = function() {
                                var t, e, i;
                                for (i = [],
                                t = 1,
                                e = a.length; e >= 1 ? t <= e : t >= e; e >= 1 ? ++t : --t)
                                    i.push(!1);
                                return i
                            }(),
                            o = !1,
                            s = function(t) {
                                return function() {
                                    var e, s, r;
                                    for (e = !0,
                                    n[t] = !0,
                                    s = 0,
                                    r = n.length; s < r; s++)
                                        if (!n[s]) {
                                            e = !1;
                                            break
                                        }
                                    if (e && !o && (o = !0,
                                    null !== i))
                                        return i()
                                }
                            }
                            ,
                            r = {},
                            a.each(function(e, i) {
                                var o, n;
                                return n = t(i).attr("data-src"),
                                n in r ? s(e)() : (r[n] = !0,
                                o = document.createElement("script"),
                                o.setAttribute("src", n),
                                o.setAttribute("type", "text/javascript"),
                                o.onload = s(e),
                                t("head")[0].appendChild(o)),
                                t(i).remove()
                            }))
                        }
                        ,
                        e
                    }()
                }
                ).call(this)
            }
            ).call(window)
        }
        ).call(e, i(0))
    },
    "./common/static/xmodule/modules/js/002-662f9ad0116845f260dd2d6a4b4f3c78.js": function(t, e, i) {
        (function(t, e, i) {
            (function() {
                (function() {
                    "use strict";
                    var o = [].indexOf || function(t) {
                        var e, i;
                        for (e = 0,
                        i = this.length; e < i; e++)
                            if (e in this && this[e] === t)
                                return e;
                        return -1
                    }
                    ;
                    this.Problem = function() {
                        function n(e) {
                            var i = this;
                            this.hint_button = function() {
                                return n.prototype.hint_button.apply(i, arguments)
                            }
                            ,
                            this.enableSubmitButtonAfterTimeout = function() {
                                return n.prototype.enableSubmitButtonAfterTimeout.apply(i, arguments)
                            }
                            ,
                            this.enableSubmitButtonAfterResponse = function() {
                                return n.prototype.enableSubmitButtonAfterResponse.apply(i, arguments)
                            }
                            ,
                            this.enableSubmitButton = function(t, e) {
                                return null !== e && void 0 !== e || (e = !0),
                                n.prototype.enableSubmitButton.apply(i, arguments)
                            }
                            ,
                            this.disableAllButtonsWhileRunning = function(t, e) {
                                return n.prototype.disableAllButtonsWhileRunning.apply(i, arguments)
                            }
                            ,
                            this.submitAnswersAndSubmitButton = function(t) {
                                return null !== t && void 0 !== t || (t = !1),
                                n.prototype.submitAnswersAndSubmitButton.apply(i, arguments)
                            }
                            ,
                            this.refreshAnswers = function() {
                                return n.prototype.refreshAnswers.apply(i, arguments)
                            }
                            ,
                            this.updateMathML = function(t, e) {
                                return n.prototype.updateMathML.apply(i, arguments)
                            }
                            ,
                            this.refreshMath = function(t, e) {
                                return n.prototype.refreshMath.apply(i, arguments)
                            }
                            ,
                            this.save_internal = function() {
                                return n.prototype.save_internal.apply(i, arguments)
                            }
                            ,
                            this.save = function() {
                                return n.prototype.save.apply(i, arguments)
                            }
                            ,
                            this.gentle_alert = function(t) {
                                return n.prototype.gentle_alert.apply(i, arguments)
                            }
                            ,
                            this.clear_all_notifications = function() {
                                return n.prototype.clear_all_notifications.apply(i, arguments)
                            }
                            ,
                            this.show = function() {
                                return n.prototype.show.apply(i, arguments)
                            }
                            ,
                            this.reset_internal = function() {
                                return n.prototype.reset_internal.apply(i, arguments)
                            }
                            ,
                            this.reset = function() {
                                return n.prototype.reset.apply(i, arguments)
                            }
                            ,
                            this.get_sr_status = function(t) {
                                return n.prototype.get_sr_status.apply(i, arguments)
                            }
                            ,
                            this.submit_internal = function() {
                                return n.prototype.submit_internal.apply(i, arguments)
                            }
                            ,
                            this.submit = function() {
                                return n.prototype.submit.apply(i, arguments)
                            }
                            ,
                            this.submit_fd = function() {
                                return n.prototype.submit_fd.apply(i, arguments)
                            }
                            ,
                            this.focus_on_save_notification = function() {
                                return n.prototype.focus_on_save_notification.apply(i, arguments)
                            }
                            ,
                            this.focus_on_hint_notification = function() {
                                return n.prototype.focus_on_hint_notification.apply(i, arguments)
                            }
                            ,
                            this.focus_on_submit_notification = function() {
                                return n.prototype.focus_on_submit_notification.apply(i, arguments)
                            }
                            ,
                            this.focus_on_notification = function(t) {
                                return n.prototype.focus_on_notification.apply(i, arguments)
                            }
                            ,
                            this.scroll_to_problem_meta = function() {
                                return n.prototype.scroll_to_problem_meta.apply(i, arguments)
                            }
                            ,
                            this.submit_save_waitfor = function(t) {
                                return n.prototype.submit_save_waitfor.apply(i, arguments)
                            }
                            ,
                            this.setupInputTypes = function() {
                                return n.prototype.setupInputTypes.apply(i, arguments)
                            }
                            ,
                            this.poll = function(t, e) {
                                return n.prototype.poll.apply(i, arguments)
                            }
                            ,
                            this.queueing = function(t) {
                                return n.prototype.queueing.apply(i, arguments)
                            }
                            ,
                            this.forceUpdate = function(t) {
                                return n.prototype.forceUpdate.apply(i, arguments)
                            }
                            ,
                            this.updateProgress = function(t) {
                                return n.prototype.updateProgress.apply(i, arguments)
                            }
                            ,
                            this.renderProgressState = function() {
                                return n.prototype.renderProgressState.apply(i, arguments)
                            }
                            ,
                            this.bind = function() {
                                return n.prototype.bind.apply(i, arguments)
                            }
                            ,
                            this.markProblemAsCompleted = function() {
                                return n.prototype.markProblemAsCompleted.apply(i, arguments)
                            }
                            ,
                            this.el = t(e).find(".problems-wrapper"),
                            this.id = this.el.data("problem-id"),
                            this.element_id = this.el.attr("id"),
                            this.url = this.el.data("url"),
                            this.content = this.el.data("content"),
                            this.has_timed_out = !1,
                            this.has_response = !1,
                            this.render(this.content)
                        }
                        return n.prototype.$ = function(e) {
                            return t(e, this.el)
                        }
                        ,
                        n.prototype.bind = function() {
                            var e, i = this;
                            "undefined" != typeof MathJax && null !== MathJax && this.el.find(".problem > div").each(function(t, e) {
                                return MathJax.Hub.Queue(["Typeset", MathJax.Hub, e])
                            }),
                            window.hasOwnProperty("update_schematics") && window.update_schematics(),
                            e = this.element_id.replace(/problem_/, ""),
                            this.inputs = this.$('[id^="input_' + e + '_"]'),
                            this.$("div.action button").click(this.refreshAnswers),
                            this.reviewButton = this.$(".notification-btn.review-btn"),
                            this.reviewButton.click(this.scroll_to_problem_meta),
                            this.submitButton = this.$(".action .submit"),
                            this.submitButtonLabel = this.$(".action .submit .submit-label"),
                            this.submitButtonSubmitText = this.submitButtonLabel.text(),
                            this.submitButtonSubmittingText = this.submitButton.data("submitting"),
                            this.submitButton.click(this.submit_fd),
                            this.hintButton = this.$(".action .hint-button"),
                            this.hintButton.click(this.hint_button),
                            this.resetButton = this.$(".action .reset"),
                            this.resetButton.click(this.reset),
                            this.showButton = this.$(".action .show"),
                            this.showButton.click(this.show),
                            this.saveButton = this.$(".action .save"),
                            this.saveNotification = this.$(".notification-save"),
                            this.showAnswerNotification = this.$(".notification-show-answer"),
                            this.saveButton.click(this.save),
                            this.gentleAlertNotification = this.$(".notification-gentle-alert"),
                            this.submitNotification = this.$(".notification-submit"),
                            this.$(".clarification").focus(function(e) {
                                var i;
                                return i = t(e.target).children("i"),
                                window.globalTooltipManager.openTooltip(i)
                            }),
                            this.$(".clarification").blur(function() {
                                return window.globalTooltipManager.hide()
                            }),
                            this.$(".review-btn").focus(function(e) {
                                return t(e.target).removeClass("sr")
                            }),
                            this.$(".review-btn").blur(function(e) {
                                return t(e.target).addClass("sr")
                            }),
                            this.bindResetCorrectness(),
                            this.submitButton.length && this.submitAnswersAndSubmitButton(!0),
                            Collapsible.setCollapsibles(this.el),
                            this.$("input.math").keyup(this.refreshMath),
                            "undefined" != typeof MathJax && null !== MathJax && this.$("input.math").each(function(t, e) {
                                return MathJax.Hub.Queue([i.refreshMath, null, e])
                            })
                        }
                        ,
                        n.prototype.renderProgressState = function() {
                            var t, e, i, o, n, s;
                            return o = this.el.data("problem-score"),
                            n = this.el.data("problem-total-possible"),
                            s = this.el.data("attempts-used"),
                            t = this.el.data("graded"),
                            t = "True" === t && 0 !== n,
                            i = void 0 === o || void 0 === n ? "" : null === o || "None" === o ? t ? ngettext("{num_points} point possible (graded, results hidden)", "{num_points} points possible (graded, results hidden)", n) : ngettext("{num_points} point possible (ungraded, results hidden)", "{num_points} points possible (ungraded, results hidden)", n) : 0 !== s && 0 !== n || 0 !== o ? t ? ngettext("{earned}/{possible} point (graded)", "{earned}/{possible} points (graded)", n) : ngettext("{earned}/{possible} point (ungraded)", "{earned}/{possible} points (ungraded)", n) : t ? ngettext("{num_points} point possible (graded)", "{num_points} points possible (graded)", n) : ngettext("{num_points} point possible (ungraded)", "{num_points} points possible (ungraded)", n),
                            e = edx.StringUtils.interpolate(i, {
                                earned: o,
                                num_points: n,
                                possible: n
                            }),
                            this.$(".problem-progress").text(e)
                        }
                        ,
                        n.prototype.updateProgress = function(t) {
                            return t.progress_changed && (this.el.data("problem-score", t.current_score),
                            this.el.data("problem-total-possible", t.total_possible),
                            this.el.data("attempts-used", t.attempts_used),
                            this.el.trigger("progressChanged")),
                            this.renderProgressState()
                        }
                        ,
                        n.prototype.forceUpdate = function(t) {
                            return this.el.data("problem-score", t.current_score),
                            this.el.data("problem-total-possible", t.total_possible),
                            this.el.data("attempts-used", t.attempts_used),
                            this.el.trigger("progressChanged"),
                            this.renderProgressState()
                        }
                        ,
                        n.prototype.queueing = function(t) {
                            var e = this;
                            this.queued_items = this.$(".xqueue"),
                            this.num_queued_items = this.queued_items.length,
                            this.num_queued_items > 0 && (window.queuePollerID && window.clearTimeout(window.queuePollerID),
                            window.queuePollerID = window.setTimeout(function() {
                                return e.poll(1e3, t)
                            }, 1e3))
                        }
                        ,
                        n.prototype.poll = function(i, o) {
                            var n = this;
                            return t.postWithPrefix(this.url + "/problem_get", function(s) {
                                var r;
                                n.new_queued_items = t(s.html).find(".xqueue"),
                                n.new_queued_items.length !== n.num_queued_items && (e.setHtml(n.el, e.HTML(s.html)).promise().done(function() {
                                    return "function" == typeof o ? o() : void 0
                                }),
                                JavascriptLoader.executeModuleScripts(n.el, function() {
                                    n.setupInputTypes(),
                                    n.bind()
                                })),
                                n.num_queued_items = n.new_queued_items.length,
                                0 === n.num_queued_items ? (n.forceUpdate(s),
                                delete window.queuePollerID) : (r = 2 * i,
                                r >= 6e4 ? (delete window.queuePollerID,
                                n.gentle_alert(gettext("The grading process is still running. Refresh the page to see updates."))) : window.queuePollerID = window.setTimeout(function() {
                                    return n.poll(r, o)
                                }, r))
                            })
                        }
                        ,
                        n.inputAjax = function(e, i, o, n, s) {
                            return n.dispatch = o,
                            n.input_id = i,
                            t.postWithPrefix(e + "/input_ajax", n, s)
                        }
                        ,
                        n.prototype.render = function(i, o) {
                            var n = this;
                            return i ? (e.setHtml(this.el, e.HTML(i)),
                            JavascriptLoader.executeModuleScripts(this.el, function() {
                                return n.setupInputTypes(),
                                n.bind(),
                                n.queueing(o),
                                n.renderProgressState(),
                                "function" == typeof o ? o() : void 0
                            })) : t.postWithPrefix(this.url + "/problem_get", function(t) {
                                return e.setHtml(n.el, e.HTML(t.html)),
                                JavascriptLoader.executeModuleScripts(n.el, function() {
                                    return n.setupInputTypes(),
                                    n.bind(),
                                    n.queueing(),
                                    n.forceUpdate(t)
                                })
                            })
                        }
                        ,
                        n.prototype.setupInputTypes = function() {
                            var e = this;
                            return this.inputtypeDisplays = {},
                            this.el.find(".capa_inputtype").each(function(i, o) {
                                var n, s, r, a, h, l, c;
                                for (n = t(o).attr("class").split(" "),
                                r = t(o).attr("id"),
                                c = [],
                                h = 0,
                                l = n.length; h < l; h++)
                                    s = n[h],
                                    a = e.inputtypeSetupMethods[s],
                                    null != a ? c.push(e.inputtypeDisplays[r] = a(o)) : c.push(void 0);
                                return c
                            })
                        }
                        ,
                        n.prototype.submit_save_waitfor = function(e) {
                            var i, o, n, s, r, a = this;
                            for (i = !1,
                            r = this.inputs,
                            n = 0,
                            s = r.length; n < s; n++)
                                if (o = r[n],
                                t(o).is("input[waitfor]")) {
                                    try {
                                        t(o).data("waitfor")(function() {
                                            return a.refreshAnswers(),
                                            e()
                                        })
                                    } catch (t) {
                                        throw "Waitfor Exception" === t.name ? alert(t.message) : alert(gettext("Could not grade your answer. The submission was aborted.")),
                                        t
                                    }
                                    i = !0
                                } else
                                    i = !1;
                            return i
                        }
                        ,
                        n.prototype.scroll_to_problem_meta = function() {
                            var e;
                            e = this.$(".problem-header"),
                            e.length > 0 && (t("html, body").animate({
                                scrollTop: e.offset().top
                            }, 500),
                            e.focus())
                        }
                        ,
                        n.prototype.focus_on_notification = function(t) {
                            var e;
                            e = this.$(".notification-" + t),
                            e.length > 0 && e.focus()
                        }
                        ,
                        n.prototype.focus_on_submit_notification = function() {
                            this.focus_on_notification("submit")
                        }
                        ,
                        n.prototype.focus_on_hint_notification = function(t) {
                            this.$(".notification-hint .notification-message > ol > li.hint-index-" + t).focus()
                        }
                        ,
                        n.prototype.focus_on_save_notification = function() {
                            this.focus_on_notification("save")
                        }
                        ,
                        n.prototype.submit_fd = function() {
                            var i, n, s, r, a, h, l, c, p, d, u, f, _, v, m = this;
                            if (0 === this.el.find("input:file").length)
                                return void this.submit();
                            if (this.enableSubmitButton(!1),
                            !window.FormData)
                                return alert(gettext("Submission aborted! Sorry, your browser does not support file uploads. If you can, please use Chrome or Safari which have been verified to support file uploads.")),
                                void this.enableSubmitButton(!0);
                            for (u = this.enableSubmitButtonAfterTimeout(),
                            a = new FormData,
                            c = 4e6,
                            l = !1,
                            h = !1,
                            p = !1,
                            f = !1,
                            r = [],
                            this.inputs.each(function(e, i) {
                                var n, s, d, u, _, v, m;
                                if ("file" === i.type) {
                                    for (u = t(i).data("required_files"),
                                    n = t(i).data("allowed_files"),
                                    m = i.files,
                                    _ = 0,
                                    v = m.length; _ < v; _++)
                                        s = m[_],
                                        0 !== n.length && o.call(n, s.name) < 0 && (f = !0,
                                        r.push(edx.StringUtils.interpolate(gettext("You submitted {filename}; only {allowedFiles} are allowed."), {
                                            filename: s.name,
                                            allowedFiles: n
                                        }))),
                                        o.call(u, s.name) >= 0 && u.splice(u.indexOf(s.name), 1),
                                        s.size > c && (l = !0,
                                        d = c / 1e6,
                                        r.push(edx.StringUtils.interpolate(gettext("Your file {filename} is too large (max size: {maxSize}MB)."), {
                                            filename: s.name,
                                            maxSize: d
                                        }))),
                                        a.append(i.id, s);
                                    0 === i.files.length && (h = !0,
                                    a.append(i.id, "")),
                                    0 !== u.length && (p = !0,
                                    r.push(edx.StringUtils.interpolate(gettext("You did not submit the required files: {requiredFiles}."), {
                                        requiredFiles: u
                                    })))
                                } else
                                    a.append(i.id, i.value)
                            }),
                            h && r.push(gettext("You did not select any files to submit.")),
                            s = "",
                            _ = 0,
                            v = r.length; _ < v; _++)
                                n = r[_],
                                s = e.joinHtml(s, e.interpolateHtml(e.HTML("<li>{error}</li>"), {
                                    error: n
                                }));
                            s = e.interpolateHtml(e.HTML("<ul>{errors}</ul>"), {
                                errors: s
                            }),
                            this.gentle_alert(s.toString()),
                            i = l || h || f || p,
                            i ? (window.clearTimeout(u),
                            this.enableSubmitButton(!0)) : (d = {
                                type: "POST",
                                data: a,
                                processData: !1,
                                contentType: !1,
                                complete: this.enableSubmitButtonAfterResponse,
                                success: function(t) {
                                    switch (t.success) {
                                    case "submitted":
                                    case "incorrect":
                                    case "correct":
                                        m.render(t.contents),
                                        m.updateProgress(t);
                                        break;
                                    default:
                                        m.gentle_alert(t.success)
                                    }
                                    return Logger.log("problem_graded", [m.answers, t.contents], m.id)
                                },
                                error: function(t) {
                                    m.gentle_alert(t.responseJSON.success)
                                }
                            },
                            t.ajaxWithPrefix(this.url + "/problem_check", d))
                        }
                        ,
                        n.prototype.submit = function() {
                            this.submit_save_waitfor(this.submit_internal) || this.disableAllButtonsWhileRunning(this.submit_internal, !0)
                        }
                        ,
                        n.prototype.submit_internal = function() {
                            var e = this
                              , i = null;
                            Logger.log("problem_check", this.answers),
                            t("#" + this.element_id).find(".input-radio").toArray().forEach(function(t, e) {
                                t.checked && (i = "selected_answer_index=" + e)
                            });
                            var o = (this.answers,
                            document.querySelector('.quiz-box[data-usage-id="' + e.id + '"]'));
                            return o && o.classList.add("quiz-box--pending"),
                            t.ajax({
                                url: this.url + "/problem_check",
                                type: "POST",
                                timeout: 1e4,
                                data: this.answers,
                                success: function(t) {
                                    switch (t.success) {
                                    case "submitted":
                                        o && (o.classList.remove("quiz-box--pending"),
                                        o.classList.add("quiz-box--done"),
                                        e.markProblemAsCompleted(e.id),
                                        o.classList.contains("quiz-box--error") && (o.classList.remove("quiz-box--error"),
                                        window.sessionStorage.removeItem("mark_error_" + e.id)));
                                    case "incorrect":
                                    case "correct":
                                        window.SR.readTexts(e.get_sr_status(t.contents)),
                                        e.el.trigger("contentChanged", [e.id, t.contents, t]),
                                        e.render(t.contents, e.focus_on_submit_notification),
                                        e.updateProgress(t),
                                        o && (o.classList.remove("quiz-box--pending"),
                                        o.classList.add("quiz-box--done"),
                                        e.markProblemAsCompleted(e.id),
                                        o.classList.contains("quiz-box--error") && (o.classList.remove("quiz-box--error"),
                                        window.sessionStorage.removeItem("mark_error_" + e.id)));
                                        break;
                                    default:
                                        o && o.classList.remove("quiz-box--pending"),
                                        e.saveNotification.hide(),
                                        e.gentle_alert(t.success)
                                    }
                                    return Logger.log("problem_graded", [e.answers, t.contents], e.id)
                                },
                                error: function(t, i, n) {
                                    o && (o.classList.remove("quiz-box--pending"),
                                    o.classList.add("quiz-box--error"),
                                    window.sessionStorage.setItem("mark_error_" + e.id, !0)),
                                    "timeout" === i ? alert(gettext("The request has exceeded the maximum time limit. Please try again!")) : console.error(n)
                                }
                            })
                        }
                        ,
                        n.prototype.get_sr_status = function(e) {
                            var i, o, n, s, r, a, h, l, c;
                            for (a = t(e).find(".status"),
                            s = [],
                            l = 0,
                            c = a.length; l < c; l++)
                                n = a[l],
                                r = t(n).closest(".wrapper-problem-response"),
                                i = !1,
                                r && (o = r.attr("aria-label")) && (h = gettext("{label}: {status}"),
                                s.push(edx.StringUtils.interpolate(h, {
                                    label: o,
                                    status: t(n).text()
                                })),
                                i = !0),
                                i || s.push(t(n).text());
                            return s
                        }
                        ,
                        n.prototype.reset = function() {
                            return this.disableAllButtonsWhileRunning(this.reset_internal, !1)
                        }
                        ,
                        n.prototype.reset_internal = function() {
                            var e = this;
                            return Logger.log("problem_reset", this.answers),
                            t.postWithPrefix(this.url + "/problem_reset", {
                                id: this.id
                            }, function(t) {
                                return t.success ? (e.el.trigger("contentChanged", [e.id, t.html, t]),
                                e.render(t.html, e.scroll_to_problem_meta),
                                e.updateProgress(t),
                                window.SR.readText(gettext("This problem has been reset."))) : e.gentle_alert(t.msg)
                            })
                        }
                        ,
                        n.prototype.show = function() {
                            var i = this;
                            return Logger.log("problem_show", {
                                problem: this.id
                            }),
                            t.postWithPrefix(this.url + "/problem_show", function(o) {
                                var n;
                                n = o.answers,
                                t.each(n, function(o, n) {
                                    var s, r = o.replace(":", "\\:");
                                    if (!t.isArray(n)) {
                                        s = i.$("#answer_" + r + ", #solution_" + r),
                                        e.setHtml(s, e.HTML(n)),
                                        Collapsible.setCollapsibles(s);
                                        try {
                                            return t(n).find(".detailed-solution")
                                        } catch (t) {
                                            return {}
                                        }
                                    }
                                }),
                                i.el.find(".capa_inputtype").each(function(e, s) {
                                    var r, a, h, l, c, p, d;
                                    for (r = t(s).attr("class").split(" "),
                                    d = [],
                                    c = 0,
                                    p = r.length; c < p; c++)
                                        a = r[c],
                                        h = i.inputtypeDisplays[t(s).attr("id")],
                                        l = i.inputtypeShowAnswerMethods[a],
                                        null != l ? d.push(l(s, h, n, o.correct_status_html)) : d.push(void 0);
                                    return d
                                }),
                                "undefined" != typeof MathJax && null !== MathJax && i.el.find(".problem > div").each(function(t, e) {
                                    return MathJax.Hub.Queue(["Typeset", MathJax.Hub, e])
                                }),
                                i.el.find(".show").attr("disabled", "disabled"),
                                i.updateProgress(o),
                                i.clear_all_notifications(),
                                i.showAnswerNotification.show(),
                                i.focus_on_notification("show-answer")
                            })
                        }
                        ,
                        n.prototype.clear_all_notifications = function() {
                            this.submitNotification.remove(),
                            this.gentleAlertNotification.hide(),
                            this.saveNotification.hide(),
                            this.showAnswerNotification.hide()
                        }
                        ,
                        n.prototype.gentle_alert = function(t) {
                            e.setHtml(this.el.find(".notification-gentle-alert .notification-message"), e.HTML(t)),
                            this.clear_all_notifications(),
                            this.gentleAlertNotification.show(),
                            this.gentleAlertNotification.focus()
                        }
                        ,
                        n.prototype.save = function() {
                            this.submit_save_waitfor(this.save_internal) || this.disableAllButtonsWhileRunning(this.save_internal, !1)
                        }
                        ,
                        n.prototype.save_internal = function() {
                            var i = this;
                            return Logger.log("problem_save", this.answers),
                            t.postWithPrefix(this.url + "/problem_save", this.answers, function(t) {
                                var o;
                                o = t.msg,
                                t.success ? (i.el.trigger("contentChanged", [i.id, t.html, t]),
                                e.setHtml(i.el.find(".notification-save .notification-message"), e.HTML(o)),
                                i.clear_all_notifications(),
                                i.el.find(".wrapper-problem-response .message").hide(),
                                i.saveNotification.show(),
                                i.focus_on_save_notification()) : i.gentle_alert(o)
                            })
                        }
                        ,
                        n.prototype.refreshMath = function(e, i) {
                            var o, n, s, r, a, h;
                            i || (i = e.target),
                            o = i.id.replace(/^input_/, ""),
                            h = "display_" + o,
                            a = "inputtype_" + o,
                            r = this.inputtypeDisplays[a],
                            "undefined" != typeof MathJax && null !== MathJax && MathJax.Hub.getAllJax(h)[0] && (s = MathJax.Hub.getAllJax(h)[0],
                            n = t(i).val(),
                            r && (n = r(n)),
                            MathJax.Hub.Queue(["Text", s, n], [this.updateMathML, s, i]))
                        }
                        ,
                        n.prototype.updateMathML = function(e, i) {
                            try {
                                t("#" + i.id + "_dynamath").val(e.root.toMathML(""))
                            } catch (t) {
                                if (!t.restart)
                                    throw t;
                                "undefined" != typeof MathJax && null !== MathJax && MathJax.Callback.After([this.refreshMath, e], t.restart)
                            }
                        }
                        ,
                        n.prototype.refreshAnswers = function() {
                            this.$("input.schematic").each(function(t, e) {
                                return e.schematic.update_value()
                            }),
                            this.$(".CodeMirror").each(function(t, e) {
                                e.CodeMirror.save && e.CodeMirror.save()
                            }),
                            this.answers = this.inputs.serialize()
                        }
                        ,
                        n.prototype.submitAnswersAndSubmitButton = function(e) {
                            var i, o, n, s = this;
                            return null !== e && void 0 !== e || (e = !1),
                            i = !0,
                            o = !1,
                            n = !1,
                            this.el.find("input:text").each(function(i, r) {
                                t(r).is(":visible") && (o = !0,
                                "" !== t(r).val() && (n = !0),
                                e && t(r).on("input", function() {
                                    s.saveNotification.hide(),
                                    s.showAnswerNotification.hide(),
                                    s.submitAnswersAndSubmitButton()
                                }))
                            }),
                            o && !n && (i = !1),
                            this.el.find(".choicegroup").each(function(o, n) {
                                var r;
                                r = !1,
                                t(n).find("input[type=checkbox], input[type=radio]").each(function(i, o) {
                                    t(o).is(":checked") && (r = !0),
                                    e && t(o).on("click", function() {
                                        s.saveNotification.hide(),
                                        s.el.find(".show").removeAttr("disabled"),
                                        s.showAnswerNotification.hide(),
                                        s.submitAnswersAndSubmitButton()
                                    })
                                }),
                                r || (i = !1)
                            }),
                            this.el.find("select").each(function(o, n) {
                                "Select an option" === t(n).find("option:selected").text().trim() && (i = !1),
                                e && t(n).on("change", function() {
                                    s.saveNotification.hide(),
                                    s.showAnswerNotification.hide(),
                                    s.submitAnswersAndSubmitButton()
                                })
                            }),
                            i ? this.enableSubmitButton(!0) : this.enableSubmitButton(!1, !1)
                        }
                        ,
                        n.prototype.bindResetCorrectness = function() {
                            var e, i = this;
                            return e = this.el.find(".capa_inputtype").add(this.el.find(".inputtype")),
                            e.each(function(e, o) {
                                var n, s, r, a, h, l;
                                for (s = t(o).attr("class").split(" "),
                                l = [],
                                a = 0,
                                h = s.length; a < h; a++)
                                    r = s[a],
                                    n = i.bindResetCorrectnessByInputtype[r],
                                    null != n ? l.push(n(o)) : l.push(void 0);
                                return l
                            })
                        }
                        ,
                        n.prototype.bindResetCorrectnessByInputtype = {
                            formulaequationinput: function(e) {
                                return t(e).find("input").on("input", function() {
                                    var i;
                                    return i = t(e).find("span.status"),
                                    i.removeClass("correct incorrect submitted"),
                                    i.parent().removeAttr("class").addClass("unsubmitted")
                                })
                            },
                            choicegroup: function(e) {
                                var i, o;
                                return i = t(e),
                                o = i.attr("id").match(/^inputtype_(.*)$/)[1],
                                i.find("input").on("change", function() {
                                    var e;
                                    return e = t("#status_" + o),
                                    e[0] ? e.removeAttr("class").addClass("status unanswered") : t("<span>", {
                                        class: "status unanswered",
                                        style: "display: inline-block;",
                                        id: "status_" + o
                                    }),
                                    i.find("label").find("span.status.correct").remove(),
                                    i.find("label").removeAttr("class")
                                })
                            },
                            "option-input": function(e) {
                                var i, o;
                                return i = t(e).find("select"),
                                o = i.attr("id").match(/^input_(.*)$/)[1],
                                i.on("change", function() {
                                    return t("#status_" + o).removeAttr("class").addClass("unanswered").find(".sr").text(gettext("unsubmitted"))
                                })
                            },
                            textline: function(e) {
                                return t(e).find("input").on("input", function() {
                                    var i;
                                    return i = t(e).find("span.status"),
                                    i.removeClass("correct incorrect submitted"),
                                    i.parent().removeClass("correct incorrect").addClass("unsubmitted")
                                })
                            }
                        },
                        n.prototype.inputtypeSetupMethods = {
                            "text-input-dynamath": function(e) {
                                var i, o, n, s;
                                return i = t(e).find(".text-input-dynamath_data"),
                                s = i.data("preprocessor"),
                                null != (n = window[s]) && (o = new n,
                                o.fn)
                            },
                            cminput: function(e) {
                                var o, n, s, r, a, h, l, c;
                                return s = t(e).find("textarea"),
                                c = s.data("tabsize"),
                                h = s.data("mode"),
                                a = s.data("linenums"),
                                l = Array(parseInt(c, 10) + 1).join(" "),
                                o = i.fromTextArea(s[0], {
                                    lineNumbers: a,
                                    indentUnit: c,
                                    tabSize: c,
                                    mode: h,
                                    matchBrackets: !0,
                                    lineWrapping: !0,
                                    indentWithTabs: !1,
                                    smartIndent: !1,
                                    extraKeys: {
                                        Esc: function() {
                                            return t(".grader-status").focus(),
                                            !1
                                        },
                                        Tab: function(t) {
                                            return t.replaceSelection(l, "end"),
                                            !1
                                        }
                                    }
                                }),
                                r = s.attr("id").replace(/^input_/, ""),
                                n = o.getInputField(),
                                n.setAttribute("id", "cm-textarea-" + r),
                                n.setAttribute("aria-describedby", "cm-editor-exit-message-" + r + " status_" + r),
                                o
                            }
                        },
                        n.prototype.inputtypeShowAnswerMethods = {
                            choicegroup: function(i, o, n, s) {
                                var r, a, h, l, c, p, d, u, f;
                                for (d = t(i),
                                h = d.attr("id").replace(/inputtype_/, ""),
                                h = h.replace(":", "\\:"),
                                r = n[h],
                                p = [],
                                l = 0,
                                c = r.length; l < c; l++)
                                    a = r[l],
                                    u = d.find("#input_" + h + "_" + a + " + label"),
                                    f = d.find("#status_" + h),
                                    f.hasClass("unanswered") ? (e.append(u, e.HTML(s)),
                                    u.addClass("choicegroup_correct")) : u.hasClass("choicegroup_correct") || (e.append(u, e.HTML(s)),
                                    u.removeClass("choicegroup_incorrect"),
                                    p.push(u.addClass("choicegroup_correct")));
                                return p
                            },
                            choicetextgroup: function(e, i, o) {
                                var n, s, r, a, h, l, c;
                                for (c = t(e),
                                r = c.attr("id").replace(/inputtype_/, ""),
                                n = o[r],
                                l = [],
                                a = 0,
                                h = n.length; a < h; a++)
                                    s = n[a],
                                    l.push(c.find("section#forinput" + s).addClass("choicetextgroup_show_correct"));
                                return l
                            },
                            imageinput: function(i, o, n) {
                                var s, r, a, h, l, c;
                                h = {
                                    rectangle: function(e, i) {
                                        var o, n;
                                        return n = /^\(([0-9]+),([0-9]+)\)-\(([0-9]+),([0-9]+)\)$/,
                                        o = i.replace(/\s*/g, "").split(/;/),
                                        t.each(o, function(t, i) {
                                            var o, s, r, a;
                                            o = Math.abs,
                                            (r = n.exec(i)) && (a = o(r[3] - r[1]),
                                            s = o(r[4] - r[2]),
                                            e.rect(r[1], r[2], a, s))
                                        }),
                                        e.stroke(),
                                        e.fill()
                                    },
                                    regions: function(e, i) {
                                        var o;
                                        return o = function(t) {
                                            var e;
                                            return e = JSON.parse(t),
                                            void 0 === e[0][0][0] && (e = [e]),
                                            e
                                        }
                                        ,
                                        t.each(o(i), function(i, o) {
                                            return e.beginPath(),
                                            t.each(o, function(t, i) {
                                                return 0 === t ? e.moveTo(i[0], i[1]) : e.lineTo(i[0], i[1])
                                            }),
                                            e.closePath(),
                                            e.stroke(),
                                            e.fill()
                                        })
                                    }
                                },
                                c = t(i),
                                a = c.attr("id").replace(/inputtype_/, ""),
                                r = c.find("#answer_" + a),
                                s = document.createElement("canvas"),
                                s.width = r.data("width"),
                                s.height = r.data("height"),
                                s.getContext ? l = s.getContext("2d") : console.log("Canvas is not supported."),
                                l.fillStyle = "rgba(255,255,255,.3)",
                                l.strokeStyle = "#FF0000",
                                l.lineWidth = "2",
                                n[a] ? (t.each(n[a], function(t, e) {
                                    null !== h[t] && void 0 !== h[t] && e && h[t](l, e)
                                }),
                                e.setHtml(r, e.HTML(s))) : console.log("Answer is absent for image input with id=" + a)
                            }
                        },
                        n.prototype.disableAllButtonsWhileRunning = function(t, e) {
                            var i = this
                              , o = [this.resetButton, this.saveButton, this.showButton, this.hintButton, this.submitButton]
                              , n = o.filter(function(t) {
                                return !t.attr("disabled")
                            });
                            return this.enableButtons(n, !1, e),
                            t().always(function() {
                                return i.enableButtons(n, !0, e)
                            })
                        }
                        ,
                        n.prototype.enableButtons = function(t, e, i) {
                            var o = this;
                            t.forEach(function(t) {
                                t.hasClass("submit") ? o.enableSubmitButton(e, i) : e ? t.removeAttr("disabled") : t.attr({
                                    disabled: "disabled"
                                })
                            })
                        }
                        ,
                        n.prototype.enableSubmitButton = function(t, e) {
                            var i;
                            null !== e && void 0 !== e || (e = !0),
                            t ? (i = "True" === this.submitButton.data("should-enable-submit-button"),
                            i && this.submitButton.removeAttr("disabled"),
                            e && this.submitButtonLabel.text(this.submitButtonSubmitText)) : (this.submitButton.attr({
                                disabled: "disabled"
                            }),
                            e && this.submitButtonLabel.text(this.submitButtonSubmittingText))
                        }
                        ,
                        n.prototype.enableSubmitButtonAfterResponse = function() {
                            return this.has_response = !0,
                            this.has_timed_out ? this.enableSubmitButton(!0) : this.enableSubmitButton(!1)
                        }
                        ,
                        n.prototype.enableSubmitButtonAfterTimeout = function() {
                            var t, e = this;
                            return this.has_timed_out = !1,
                            this.has_response = !1,
                            t = function() {
                                e.has_timed_out = !0,
                                e.has_response && e.enableSubmitButton(!0)
                            }
                            ,
                            window.setTimeout(t, 750)
                        }
                        ,
                        n.prototype.hint_button = function() {
                            var i, o, n, s = this;
                            return i = this.$(".problem-hint"),
                            o = i.attr("hint_index"),
                            n = void 0 === o ? 0 : parseInt(o, 10) + 1,
                            t.postWithPrefix(this.url + "/hint_button", {
                                hint_index: n,
                                input_id: this.id
                            }, function(t) {
                                var o;
                                t.success ? (o = s.$(".problem-hint .notification-message"),
                                i.attr("hint_index", t.hint_index),
                                e.setHtml(o, e.HTML(t.msg)),
                                MathJax.Hub.Queue(["Typeset", MathJax.Hub, i[0]]),
                                t.should_enable_next_hint ? s.hintButton.removeAttr("disabled") : s.hintButton.attr({
                                    disabled: "disabled"
                                }),
                                s.el.find(".notification-hint").show(),
                                s.focus_on_hint_notification(n)) : s.gentle_alert(t.msg)
                            })
                        }
                        ,
                        n.prototype.markProblemAsCompleted = function(e) {
                            for (var i, o = document.querySelector(".vert-mod"), n = o.querySelectorAll(".vert"), s = 0; s < n.length; s++) {
                                var r = n[s].getAttribute("data-id");
                                if (r && -1 !== r.indexOf("quiz_navigation")) {
                                    i = r;
                                    break
                                }
                            }
                            if (!i)
                                for (var a = document.querySelectorAll('[id^="seq_contents_"]'), s = 0; s < a.length; s++) {
                                    var h = document.createElement("div");
                                    h.innerHTML = a[s].textContent;
                                    for (var l = h.querySelector(".vert-mod"), c = l.querySelectorAll(".vert"), p = 0; p < c.length; p++) {
                                        var r = c[p].getAttribute("data-id");
                                        if (r && -1 !== r.indexOf("quiz_navigation")) {
                                            i = r;
                                            break
                                        }
                                    }
                                }
                            var d = window.location.pathname
                              , u = d.split("/").slice(0, 3).join("/")
                              , f = u + "/xblock/" + i + "/handler/";
                            t.ajax({
                                url: f + "mark_completed/",
                                type: "POST",
                                data: JSON.stringify({
                                    problemId: e
                                }),
                                contentType: "application/json",
                                success: function(t) {
                                    console.log("Problem marked as completed:", e)
                                }
                            })
                        }
                        ,
                        n
                    }
                    .call(this)
                }
                ).call(this)
            }
            ).call(window)
        }
        ).call(e, i(0), i("./node_modules/edx-ui-toolkit/src/js/utils/html-utils.js"), i("./common/static/js/vendor/codemirror-compressed.js"))
    },
    "./common/static/xmodule/modules/js/004-b0c34afa95eaa6b45d843d92ca523a94.js": function(t, e, i) {
        (function(t) {
            (function() {
                window.ImageInput = function(t, e) {
                    function i(e) {
                        this.el = t("#imageinput_" + e),
                        this.crossEl = t("#cross_" + e),
                        this.inputEl = t("#input_" + e),
                        this.el.on("click", this.clickHandler.bind(this))
                    }
                    function o(t) {
                        var e = this.el.offset()
                          , i = t.offsetX ? t.offsetX : t.pageX - e.left
                          , o = t.offsetY ? t.offsetY : t.pageY - e.top
                          , n = "[" + Math.round(i) + "," + Math.round(o) + "]";
                        this.crossEl.css({
                            left: i - 15,
                            top: o - 15,
                            visibility: "visible"
                        }),
                        this.inputEl.val(n)
                    }
                    var n = i;
                    return n.prototype = {
                        constructor: i,
                        clickHandler: o
                    },
                    n
                }
                .call(this, t)
            }
            ).call(window)
        }
        ).call(e, i(0))
    },
    "./common/static/xmodule/modules/js/005-fc8bd2dc5b96b86d1abefdd417dd8ba5.js": function(t, e, i) {
        (function(t, e) {
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ;
            (function() {
                function o() {
                    for (var e = t(".schematic"), i = 0; i < e.length; ++i)
                        if ("true" != e[i].getAttribute("loaded")) {
                            try {
                                new schematic.Schematic(e[i])
                            } catch (t) {
                                var o = document.createElement("div");
                                o.style.border = "thick solid #FF0000",
                                o.style.margins = "20px",
                                o.style.padding = "20px";
                                var n = document.createTextNode("Sorry, there a browser error in starting the schematic tool.  The tool is known to be compatible with the latest versions of Firefox and Chrome, which we recommend you use.");
                                o.appendChild(n),
                                e[i].parentNode.insertBefore(o, e[i])
                            }
                            e[i].setAttribute("loaded", "true")
                        }
                }
                var n = function() {
                    function t() {
                        this.node_map = [],
                        this.ntypes = [],
                        this.initial_conditions = [],
                        this.devices = [],
                        this.device_map = [],
                        this.voltage_sources = [],
                        this.current_sources = [],
                        this.finalized = !1,
                        this.diddc = !1,
                        this.node_index = -1,
                        this.periods = 1
                    }
                    function e(t, e) {
                        for (var i = new Array(t), o = t - 1; o >= 0; --o) {
                            i[o] = new Array(e);
                            for (var n = e - 1; n >= 0; --n)
                                i[o][n] = 0
                        }
                        return i
                    }
                    function o(t, e, i, o) {
                        var n = t.length
                          , s = t[0].length;
                        if (n != i.length || s != e.length)
                            throw "Rows of M mismatched to b or cols mismatch to x.";
                        for (var r = 0; r < n; r++) {
                            for (var a = 0, h = 0; h < s; h++)
                                a += t[r][h] * e[h];
                            i[r] = o * a
                        }
                    }
                    function n(t, e, o, n, s) {
                        var r = t.length
                          , a = t[0].length;
                        if (r > e.length || a > e[0].length)
                            throw "Row or columns of A to large for B";
                        if (r > s.length || a > s[0].length)
                            throw "Row or columns of A to large for C";
                        if ("number" == typeof o && "number" == typeof n)
                            for (var h = 0; h < r; h++)
                                for (var l = 0; l < a; l++)
                                    s[h][l] = o * t[h][l] + n * e[h][l];
                        else if ("number" == typeof n && o instanceof Array)
                            for (var h = 0; h < r; h++)
                                for (var l = 0; l < a; l++)
                                    s[h][l] = o[h] * t[h][l] + n * e[h][l];
                        else {
                            if (!((void 0 === n ? "undefined" : i(n))instanceof Array && o instanceof Array))
                                throw "scalea and scaleb must be scalars or Arrays";
                            for (var h = 0; h < r; h++)
                                for (var l = 0; l < a; l++)
                                    s[h][l] = o[h] * t[h][l] + n[h] * e[h][l]
                        }
                    }
                    function s(t, e) {
                        var i = t.length
                          , o = t[0].length;
                        if (i > e.length || o > e[0].length)
                            throw "Rows or cols > rows or cols of dest";
                        for (var n = 0; n < i; n++)
                            for (var s = 0; s < o; s++)
                                e[n][s] = t[n][s]
                    }
                    function r(t) {
                        var i, o, n, r = t.length, a = t[0].length, h = e(r, a);
                        s(t, h);
                        for (var l = 0, c = r - 1; c >= 0; --c)
                            for (var p = r - 1; p >= 0; --p)
                                Math.abs(h[c][p]) > l && (l = Math.abs(h[c][p]));
                        for (var d = 0, u = 0, c = 0; c < r; c++)
                            for (var p = u; p < a; p++) {
                                for (var f = Math.abs(h[c][p]), _ = c, o = c + 1; o < r; o++)
                                    (i = Math.abs(h[o][p])) > f && (f = i,
                                    _ = o);
                                if (Math.abs(f) > A * l) {
                                    u = p + 1,
                                    d += 1,
                                    i = h[c],
                                    h[c] = h[_],
                                    h[_] = i;
                                    for (var o = c + 1; o < r; o++)
                                        if (0 != (i = h[o][p] / h[c][p]))
                                            for (var n = p; n < a; n++)
                                                h[o][n] -= h[c][n] * i;
                                    break
                                }
                            }
                        return d
                    }
                    function a(t, e) {
                        var i, o = t.length, n = t[0].length;
                        if (null != e)
                            for (var s = o - 1; s >= 0; --s)
                                t[s][n - 1] = e[s];
                        for (var r = 0, a = o - 1, s = 0; s < o; s++) {
                            for (var h = s, l = 0, c = s; c < o; c++) {
                                for (var p = t[c], d = 0, u = n - 2; u >= 0; --u)
                                    d += p[u] * p[u];
                                (s == c || d > l) && (h = c,
                                l = d)
                            }
                            if (h > s) {
                                var f = t[s];
                                t[s] = t[h],
                                t[h] = f
                            }
                            var _ = Math.sqrt(l);
                            if (0 == s && (r = _),
                            !(_ > r * A)) {
                                a = s - 1;
                                break
                            }
                            i = 1 / _;
                            for (var p = t[s], u = n - 1; u >= 0; --u)
                                p[u] *= i;
                            for (var c = s + 1; c < o; c++) {
                                for (var v = t[c], m = 0, u = n - 2; u >= 0; --u)
                                    m += p[u] * v[u];
                                for (var u = n - 1; u >= 0; --u)
                                    v[u] -= m * p[u]
                            }
                        }
                        for (var g = new Array(n - 1), u = n - 2; u >= 0; --u)
                            g[u] = 0;
                        for (var s = a; s >= 0; --s) {
                            p = t[s];
                            for (var u = n - 2; u >= 0; --u)
                                g[u] += p[u] * p[n - 1]
                        }
                        return g
                    }
                    function h(t, e) {
                        var i, o, n, s = t.length;
                        if (null != e)
                            for (var r = 0; r < s; r++)
                                t[r][s] = e[r];
                        for (var a = 0; a < s; a++) {
                            var h = Math.abs(t[a][a])
                              , l = a;
                            for (o = a + 1; o < s; o++)
                                (i = Math.abs(t[o][a])) > h && (h = i,
                                l = o);
                            for (0 == h ? t[a][a] = A : (i = t[a],
                            t[a] = t[l],
                            t[l] = i),
                            o = a + 1; o < s; o++)
                                if (0 != (i = t[o][a] / t[a][a]))
                                    for (n = a; n <= s; n++)
                                        t[o][n] -= t[a][n] * i
                        }
                        var c = new Array(s);
                        for (o = s - 1; o >= 0; --o) {
                            for (i = t[o][s],
                            n = s - 1; n > o; --n)
                                i -= t[o][n] * c[n];
                            c[o] = i / t[o][o]
                        }
                        return c
                    }
                    function l() {}
                    function c(t) {
                        return t.charCodeAt(0)
                    }
                    function p(t, e) {
                        for (var i = t.length, o = 1, n = 0, s = 0; s < i && t.charAt(s) <= " "; )
                            s += 1;
                        if (s == i)
                            return e;
                        "-" == t.charAt(s) ? (o = -1,
                        s += 1) : "+" == t.charAt(s) && (s += 1);
                        var r = s;
                        if (s >= i)
                            return e;
                        if ("0" == t.charAt(s)) {
                            if ((s += 1) >= i)
                                return 0;
                            if ("x" == t.charAt(s) || "X" == t.charAt(s)) {
                                for (; ; ) {
                                    if ((s += 1) >= i)
                                        break;
                                    if (t.charAt(s) >= "0" && t.charAt(s) <= "9")
                                        n = 16 * n + c(t.charAt(s)) - c("0");
                                    else if (t.charAt(s) >= "A" && t.charAt(s) <= "F")
                                        n = 16 * n + c(t.charAt(s)) - c("A") + 10;
                                    else {
                                        if (!(t.charAt(s) >= "a" && t.charAt(s) <= "f"))
                                            break;
                                        n = 16 * n + c(t.charAt(s)) - c("a") + 10
                                    }
                                }
                                return n * o
                            }
                            if ("b" == t.charAt(s) || "B" == t.charAt(s)) {
                                for (; ; ) {
                                    if ((s += 1) >= i)
                                        break;
                                    if (!(t.charAt(s) >= "0" && t.charAt(s) <= "1"))
                                        break;
                                    n = 2 * n + c(t.charAt(s)) - c("0")
                                }
                                return n * o
                            }
                            if ("." != t.charAt(s)) {
                                for (; ; ) {
                                    if (!(t.charAt(s) >= "0" && t.charAt(s) <= "7"))
                                        break;
                                    if (n = 8 * n + c(t.charAt(s)) - c("0"),
                                    (s += 1) >= i)
                                        break
                                }
                                return n * o
                            }
                        }
                        for (; ; ) {
                            if (!(t.charAt(s) >= "0" && t.charAt(s) <= "9"))
                                break;
                            if (n = 10 * n + c(t.charAt(s)) - c("0"),
                            (s += 1) >= i)
                                break
                        }
                        if (s < i && "." == t.charAt(s))
                            for (; ; ) {
                                if ((s += 1) >= i)
                                    break;
                                if (!(t.charAt(s) >= "0" && t.charAt(s) <= "9"))
                                    break;
                                n = 10 * n + c(t.charAt(s)) - c("0"),
                                o *= .1
                            }
                        if (s == r)
                            return e;
                        if (n *= o,
                        s < i) {
                            var a = t.charAt(s);
                            if (s += 1,
                            "e" == a || "E" == a) {
                                var h = 0;
                                for (o = 10,
                                s < i && ("+" == t.charAt(s) ? s += 1 : "-" == t.charAt(s) && (s += 1,
                                o = .1)); s < i && t.charAt(s) >= "0" && t.charAt(s) <= "9"; )
                                    h = 10 * h + c(t.charAt(s)) - c("0"),
                                    s += 1;
                                for (; h > 0; )
                                    h -= 1,
                                    n *= o
                            } else
                                "t" == a || "T" == a ? n *= 1e12 : "g" == a || "G" == a ? n *= 1e9 : "M" == a ? n *= 1e6 : "k" == a || "K" == a ? n *= 1e3 : "m" == a ? n *= .001 : "u" == a || "U" == a ? n *= 1e-6 : "n" == a || "N" == a ? n *= 1e-9 : "p" == a || "P" == a ? n *= 1e-12 : "f" != a && "F" != a || (n *= 1e-15)
                        }
                        return n
                    }
                    function d(t) {
                        var e = {};
                        e.period = 0,
                        e.value = function(t) {
                            return 0
                        }
                        ,
                        e.inflection_point = function(t) {}
                        ;
                        var i = t.indexOf("(");
                        if (i >= 0) {
                            e.fun = t.slice(0, i),
                            e.args = [];
                            var o = t.indexOf(")", i);
                            for (-1 == o && (o = t.length),
                            i += 1; i < o; )
                                if (t.charAt(i) <= " ")
                                    i++;
                                else {
                                    var n = t.indexOf(",", i);
                                    -1 == n && (n = o),
                                    e.args.push(p(t.slice(i, n), void 0)),
                                    i = n + 1
                                }
                        } else
                            e.fun = "dc",
                            e.args = [p(t, 0)];
                        if ("dc" == e.fun) {
                            var t = f(e.args, 0, 0);
                            e.args = [t],
                            e.value = function(e) {
                                return t
                            }
                        } else if ("impulse" == e.fun) {
                            var s = f(e.args, 0, 1)
                              , r = Math.abs(f(e.args, 2, 1e-9));
                            e.args = [s, r],
                            u(e, [0, 0, r / 2, s, r, 0], !1)
                        } else if ("step" == e.fun) {
                            var a = f(e.args, 0, 0)
                              , h = f(e.args, 1, 1)
                              , l = Math.max(0, f(e.args, 2, 0))
                              , c = Math.abs(f(e.args, 3, 1e-9));
                            e.args = [a, h, l, c],
                            u(e, [l, a, l + c, h], !1)
                        } else if ("square" == e.fun) {
                            var a = f(e.args, 0, 0)
                              , h = f(e.args, 1, 1)
                              , d = Math.abs(f(e.args, 2, 1))
                              , _ = Math.min(100, Math.abs(f(e.args, 3, 50)));
                            e.args = [a, h, d, _];
                            var v = 0 == d ? 1 / 0 : 1 / d
                              , m = .01 * v
                              , g = .01 * _ * .98 * v;
                            u(e, [0, a, m, h, m + g, h, m + g + m, a, v, a], !0)
                        } else if ("triangle" == e.fun) {
                            var a = f(e.args, 0, 0)
                              , h = f(e.args, 1, 1)
                              , d = Math.abs(f(e.args, 2, 1));
                            e.args = [a, h, d];
                            var v = 0 == d ? 1 / 0 : 1 / d;
                            u(e, [0, a, v / 2, h, v, a], !0)
                        } else if ("pwl" == e.fun || "pwl_repeating" == e.fun)
                            u(e, e.args, "pwl_repeating" == e.fun);
                        else if ("pulse" == e.fun) {
                            var a = f(e.args, 0, 0)
                              , h = f(e.args, 1, 1)
                              , l = Math.max(0, f(e.args, 2, 0))
                              , c = Math.abs(f(e.args, 3, 1e-9))
                              , y = Math.abs(f(e.args, 4, 1e-9))
                              , b = Math.abs(f(e.args, 5, 1e9))
                              , v = Math.abs(f(e.args, 6, 1e9));
                            e.args = [a, h, l, c, y, b, v];
                            var w = l
                              , x = w + c
                              , A = x + b
                              , M = A + y;
                            u(e, [w, a, x, h, A, h, M, a, v, a], !0)
                        } else if ("sin" == e.fun) {
                            var S = f(e.args, 0, 0)
                              , C = f(e.args, 1, 1)
                              , d = Math.abs(f(e.args, 2, 1));
                            e.period = 1 / d;
                            var l = Math.max(0, f(e.args, 3, 0))
                              , T = f(e.args, 4, 0);
                            e.args = [S, C, d, l, T],
                            T /= 360,
                            e.value = function(t) {
                                return t < l ? S + C * Math.sin(2 * Math.PI * T) : S + C * Math.sin(2 * Math.PI * (d * (t - l) + T))
                            }
                            ,
                            e.inflection_point = function(t) {
                                return t < l ? l : void 0
                            }
                        }
                        return e.dc = e.value(0),
                        e
                    }
                    function u(t, e, i) {
                        var o = e.length;
                        i && (t.period = e[o - 2]),
                        o % 2 == 1 && (npts -= 1),
                        o <= 2 ? (t.value = function(t) {
                            return 2 == o ? e[1] : 0
                        }
                        ,
                        t.inflection_point = function(t) {}
                        ) : (t.value = function(t) {
                            i && (t = Math.fmod(t, e[o - 2]));
                            var n = e[0]
                              , s = e[1];
                            if (t > n)
                                for (var r, a, h = 2; h < o; h += 2) {
                                    if (r = e[h],
                                    a = e[h + 1],
                                    r > n && t < r)
                                        return s + (a - s) * (t - n) / (r - n);
                                    n = r,
                                    s = a
                                }
                            return s
                        }
                        ,
                        t.inflection_point = function(t) {
                            i && (t = Math.fmod(t, e[o - 2]));
                            for (var n = 0; n < o; n += 2) {
                                var s = e[n];
                                if (t < s)
                                    return s
                            }
                        }
                        )
                    }
                    function f(t, e, i) {
                        if (e < t.length) {
                            var o = t[e];
                            return void 0 === o && (o = i),
                            o
                        }
                        return i
                    }
                    function _(t, e, i, o) {
                        l.call(this),
                        this.src = d(o),
                        this.npos = t,
                        this.nneg = e,
                        this.branch = i
                    }
                    function v(t, e, i) {
                        l.call(this),
                        this.src = d(i),
                        this.npos = t,
                        this.nneg = e
                    }
                    function m(t, e, i) {
                        l.call(this),
                        this.n1 = t,
                        this.n2 = e,
                        this.g = 1 / i
                    }
                    function g(t, e, i, o) {
                        l.call(this),
                        this.anode = t,
                        this.cathode = e,
                        this.area = i,
                        this.type = o,
                        this.is = 1e-14,
                        this.ais = this.area * this.is,
                        this.vt = "normal" == o ? .0258 : 1e-4,
                        this.exp_arg_max = 50,
                        this.exp_max = Math.exp(this.exp_arg_max)
                    }
                    function y(t, e, i) {
                        l.call(this),
                        this.n1 = t,
                        this.n2 = e,
                        this.value = i
                    }
                    function b(t, e, i, o) {
                        l.call(this),
                        this.n1 = t,
                        this.n2 = e,
                        this.branch = i,
                        this.value = o
                    }
                    function w(t, e, i, o, n, s, r) {
                        l.call(this),
                        this.np = t,
                        this.nn = e,
                        this.no = i,
                        this.ng = o,
                        this.branch = n,
                        this.gain = s,
                        this.name = r
                    }
                    function x(t, e, i, o, n, s) {
                        if (l.call(this),
                        this.d = t,
                        this.g = e,
                        this.s = i,
                        this.name = n,
                        this.ratio = o,
                        "n" != s && "p" != s)
                            throw "fet type is not n or p";
                        this.type_sign = "n" == s ? 1 : -1,
                        this.vt = .5,
                        this.kp = 2e-5,
                        this.beta = this.kp * this.ratio,
                        this.lambda = .05
                    }
                    var A = 1e-12
                      , M = 2
                      , S = 8
                      , C = 1e-4
                      , T = 10
                      , k = Math.sqrt(1e-12)
                      , E = Math.sqrt(C);
                    return t.prototype.gnd_node = function() {
                        return -1
                    }
                    ,
                    t.prototype.node = function(t, e, i) {
                        return this.node_index += 1,
                        t && (this.node_map[t] = this.node_index),
                        this.ntypes.push(e),
                        this.initial_conditions.push(i),
                        this.node_index
                    }
                    ,
                    t.prototype.finalize = function() {
                        if (!this.finalized) {
                            this.finalized = !0,
                            this.N = this.node_index + 1;
                            for (var t = this.devices.length - 1; t >= 0; --t)
                                this.devices[t].finalize(this);
                            this.matrix = e(this.N, this.N + 1),
                            this.Gl = e(this.N, this.N),
                            this.G = e(this.N, this.N),
                            this.C = e(this.N, this.N),
                            this.soln_max = new Array(this.N),
                            this.abstol = new Array(this.N),
                            this.solution = new Array(this.N),
                            this.rhs = new Array(this.N);
                            for (var t = this.N - 1; t >= 0; --t)
                                this.soln_max[t] = 0,
                                this.abstol[t] = 0 == this.ntypes[t] ? 1e-6 : 1e-12,
                                this.solution[t] = 0,
                                this.rhs[t] = 0;
                            for (var t = this.devices.length - 1; t >= 0; --t)
                                this.devices[t].load_linear(this);
                            var i = this.voltage_sources.length;
                            if (i > 0) {
                                for (var o = e(i, this.N), t = i - 1; t >= 0; --t)
                                    for (var n = this.voltage_sources[t].branch, s = this.N - 1; s >= 0; s--)
                                        o[t][s] = this.Gl[n][s];
                                if (r(o) < i)
                                    return alert("Warning!!! Circuit has a voltage source loop or a source or current probe shorted by a wire, please remove the source or the wire causing the short."),
                                    alert("Warning!!! Simulator might produce meaningless results or no result with illegal circuits."),
                                    !1
                            }
                        }
                        return !0
                    }
                    ,
                    t.prototype.load_netlist = function(t) {
                        for (var e = t.length - 1; e >= 0; --e) {
                            var i = t[e]
                              , o = i[0];
                            if ("g" == o) {
                                var n = i[3];
                                this.node_map[n[0]] = this.gnd_node()
                            }
                        }
                        for (var s = !1, e = t.length - 1; e >= 0; --e) {
                            var i = t[e]
                              , o = i[0];
                            if ("view" != o && "w" != o && "g" != o && "s" != o && "L" != o) {
                                var r = i[2]
                                  , a = r.name;
                                void 0 != a && "" != a || (a = "_" + r._json_.toString());
                                for (var n = i[3], h = n.length - 1; h >= 0; --h) {
                                    var l = n[h]
                                      , c = this.node_map[l];
                                    void 0 == c ? c = this.node(l, 0) : c == this.gnd_node() && (s = !0),
                                    n[h] = c
                                }
                                "r" == o ? this.r(n[0], n[1], r.r, a) : "d" == o ? this.d(n[0], n[1], r.area, r.type, a) : "c" == o ? this.c(n[0], n[1], r.c, a) : "l" == o ? this.l(n[0], n[1], r.l, a) : "v" == o ? this.v(n[0], n[1], r.value, a) : "i" == o ? this.i(n[0], n[1], r.value, a) : "o" == o ? this.opamp(n[0], n[1], n[2], n[3], r.A, a) : "n" == o ? this.n(n[0], n[1], n[2], r["W/L"], a) : "p" == o ? this.p(n[0], n[1], n[2], r["W/L"], a) : "a" == o && this.v(n[0], n[1], "0", a)
                            }
                        }
                        return !!s || (alert("Please make at least one connection to ground  (inverted T symbol)"),
                        !1)
                    }
                    ,
                    t.prototype.find_solution = function(t, e) {
                        for (var i, o, n, s, r = this.solution, h = this.rhs, l = [], c = 0, p = !1, d = 0, u = 0; u < e; u++) {
                            t(this, r, h),
                            n = 0;
                            for (var f = this.N - 1; f >= 0; --f)
                                0 == this.ntypes[f] && (n += Math.abs(h[f]));
                            if (u > 0 && 0 == p && c < n) {
                                for (var f = this.N - 1; f >= 0; --f)
                                    r[f] -= l[f];
                                u -= 1,
                                p = !0
                            } else
                                l = a(this.matrix, h),
                                n < c ? d += 1 : d = 0,
                                d > 10 && (p = !1,
                                d = 0),
                                c = n;
                            (0 == u || n > i) && (i = n),
                            o = !(u < e - 1 && n > k + E * i);
                            for (var f = this.N - 1; f >= 0; --f)
                                p && 0 == this.ntypes[f] && (l[f] = l[f] > .3 ? .3 : l[f],
                                l[f] = l[f] < -.3 ? -.3 : l[f]),
                                r[f] += l[f],
                                s = this.abstol[f] + C * this.soln_max[f],
                                Math.abs(l[f]) > s && (o = !1,
                                this.problem_node = f);
                            if (1 == o) {
                                for (var f = this.N - 1; f >= 0; --f)
                                    Math.abs(r[f]) > this.soln_max[f] && (this.soln_max[f] = Math.abs(r[f]));
                                return u + 1
                            }
                        }
                    }
                    ,
                    t.prototype.dc = function() {
                        function t(t, e, i) {
                            o(t.Gl, e, i, -1),
                            s(t.Gl, t.G);
                            for (var n = t.devices.length - 1; n >= 0; --n)
                                t.devices[n].load_dc(t, e, i);
                            s(t.G, t.matrix)
                        }
                        if (0 != this.finalize()) {
                            if (void 0 === this.find_solution(t, 1e3))
                                return void (this.current_sources.length > 0 ? alert("Newton Method Failed, do your current sources have a conductive path to ground?") : alert("Newton Method Failed, it may be your circuit or it may be our simulator."));
                            this.diddc = !0;
                            var e = [];
                            for (var i in this.node_map) {
                                var n = this.node_map[i];
                                e[i] = -1 == n ? 0 : this.solution[n]
                            }
                            for (var r = this.voltage_sources.length - 1; r >= 0; --r) {
                                var a = this.voltage_sources[r];
                                e["I(" + a.name + ")"] = this.solution[a.branch]
                            }
                            return e
                        }
                    }
                    ,
                    t.prototype.tran = function(t, e, i, r, a) {
                        function h(t, e, i) {
                            o(t.Gl, e, t.c, -1),
                            s(t.Gl, t.G);
                            for (var r = t.devices.length - 1; r >= 0; --r)
                                t.devices[r].load_tran(t, e, t.c, t.time);
                            o(t.C, e, t.q, 1);
                            for (var r = t.N - 1; r >= 0; --r) {
                                var a = t.alpha0 * t.q[r] + t.alpha1 * t.oldq[r] + t.alpha2 * t.old2q[r];
                                i[r] = t.beta0[r] * t.c[r] + t.beta1[r] * t.oldc[r] - a
                            }
                            n(t.G, t.C, t.beta0, t.alpha0, t.matrix)
                        }
                        function l(t, e, i, o) {
                            var n = t - e
                              , s = t - i
                              , r = t - o
                              , a = e - i
                              , h = e - o
                              , l = i - o;
                            return c[0] = s * r / (a * h),
                            c[1] = n * r / (-a * l),
                            c[2] = n * s / (h * l),
                            c
                        }
                        var c = new Array(3);
                        if (a = !1,
                        0 == this.diddc && 0 == a) {
                            if (void 0 == this.dc() && (alert("DC failed, trying transient analysis from zero."),
                            this.finalized = !1,
                            0 == this.finalize()))
                                return
                        } else if (0 == this.finalize())
                            return;
                        for (var p = this.N, d = new Array(p + 1), u = p; u >= 0; --u)
                            d[u] = [];
                        this.old3sol = new Array(this.N),
                        this.old3q = new Array(this.N),
                        this.old2sol = new Array(this.N),
                        this.old2q = new Array(this.N),
                        this.oldsol = new Array(this.N),
                        this.oldq = new Array(this.N),
                        this.q = new Array(this.N),
                        this.oldc = new Array(this.N),
                        this.c = new Array(this.N),
                        this.alpha0 = 1,
                        this.alpha1 = 0,
                        this.alpha2 = 0,
                        this.beta0 = new Array(this.N),
                        this.beta1 = new Array(this.N),
                        this.ar = this.algebraic(this.C),
                        this.ltecheck = new Array(this.N);
                        for (var u = p; u >= 0; --u)
                            this.ltecheck[u] = 0 == this.ar[u];
                        for (var f in this.node_map)
                            for (var _ = this.node_map[f], u = r.length; u >= 0; --u)
                                if (f == r[u]) {
                                    this.ltecheck[_] = !0;
                                    break
                                }
                        for (var v = i - e, u = this.voltage_sources.length - 1; u >= 0; --u) {
                            var m = this.voltage_sources[u].src.period;
                            m > 0 && (v = Math.min(v, m))
                        }
                        for (var u = this.current_sources.length - 1; u >= 0; --u) {
                            var m = this.current_sources[u].src.period;
                            m > 0 && (v = Math.min(v, m))
                        }
                        this.periods = Math.ceil((i - e) / v),
                        this.time = e,
                        this.max_step = (i - e) / (this.periods * t),
                        this.min_step = this.max_step / 1e8;
                        var g = this.max_step / 1e6;
                        this.oldt = this.time - g,
                        h(this, this.solution, this.rhs);
                        for (var u = p - 1; u >= 0; --u)
                            this.old3sol[u] = this.solution[u],
                            this.old2sol[u] = this.solution[u],
                            this.oldsol[u] = this.solution[u],
                            this.old3q[u] = this.q[u],
                            this.old2q[u] = this.q[u],
                            this.oldq[u] = this.q[u],
                            this.oldc[u] = this.c[u];
                        for (var y, b, w = 5e4 * this.periods, x = -3; x < w; x++) {
                            for (var u = this.N - 1; u >= 0; --u)
                                x >= 0 && d[u].push(this.solution[u]),
                                this.oldc[u] = this.c[u],
                                this.old3sol[u] = this.old2sol[u],
                                this.old2sol[u] = this.oldsol[u],
                                this.oldsol[u] = this.solution[u],
                                this.old3q[u] = this.oldq[u],
                                this.old2q[u] = this.oldq[u],
                                this.oldq[u] = this.q[u];
                            if (x < 0)
                                this.old3t = this.old2t - (this.oldt - this.old2t),
                                this.old2t = this.oldt - (e - this.oldt),
                                this.oldt = e - (this.time - this.oldt),
                                this.time = e,
                                y = 1,
                                b = 0;
                            else {
                                if (d[this.N].push(this.time),
                                this.old3t = this.old2t,
                                this.old2t = this.oldt,
                                this.oldt = this.time,
                                this.time >= i)
                                    break;
                                this.time + g > i ? this.time = i : this.time + 1.5 * g > i ? this.time += 2 / 3 * (i - this.time) : this.time += g,
                                y = .5,
                                b = .5
                            }
                            for (var u = this.N - 1; u >= 0; --u)
                                this.beta0[u] = y + this.ar[u] * b,
                                this.beta1[u] = (1 - this.ar[u]) * b;
                            for (; ; ) {
                                if (this.alpha0 = 1 / (this.time - this.oldt),
                                this.alpha1 = -this.alpha0,
                                this.alpha2 = 0,
                                this.time - this.oldt < 1e-4 * i)
                                    for (var u = this.N - 1; u >= 0; --u)
                                        this.beta0[u] = 1,
                                        this.beta1[u] = 0;
                                var A = this.find_solution(h, 20);
                                if (void 0 != A && (x <= 0 || this.time - this.oldt < (1 + C) * this.min_step)) {
                                    x > 0 && (g = M * this.min_step);
                                    break
                                }
                                if (void 0 == A)
                                    this.time = this.oldt + (this.time - this.oldt) / 4;
                                else {
                                    if (!((g = function(t, e) {
                                        for (var i = 1 / S, o = M, n = (t.N,
                                        l(t.time, t.oldt, t.old2t, t.old3t)), s = .5 * (t.time - t.oldt) / (t.time - t.old3t), r = 0, a = t.N - 1; a >= 0; --a)
                                            if (t.ltecheck[a]) {
                                                var h = n[0] * t.oldsol[a] + n[1] * t.old2sol[a] + n[2] * t.old3sol[a]
                                                  , c = Math.abs(t.solution[a] - h) * s
                                                  , p = c / (T * (t.abstol[a] + C * t.soln_max[a]));
                                                r = Math.max(r, p)
                                            }
                                        var d, u = 1 / Math.pow(r, 1 / 3);
                                        return u < 1 ? (u = Math.max(u, i),
                                        d = .75 * (t.time - t.oldt) * u,
                                        d = Math.max(d, t.min_step)) : (u = Math.min(u, o),
                                        d = u > 1.2 ? (t.time - t.oldt) * u / 1.2 : t.time - t.oldt,
                                        d = Math.min(d, t.max_step)),
                                        d
                                    }(this, x)) < (1 - C) * (this.time - this.oldt)))
                                        break;
                                    this.time = this.oldt + g
                                }
                            }
                        }
                        var k = [];
                        for (var f in this.node_map) {
                            var _ = this.node_map[f];
                            k[f] = -1 == _ ? 0 : d[_]
                        }
                        for (var u = this.voltage_sources.length - 1; u >= 0; --u) {
                            var E = this.voltage_sources[u];
                            k["I(" + E.name + ")"] = d[E.branch]
                        }
                        return k._time_ = d[this.N],
                        k
                    }
                    ,
                    t.prototype.ac = function(t, i, o, n) {
                        if (void 0 != this.dc()) {
                            var s = this.N
                              , r = this.G
                              , a = this.C
                              , l = e(2 * s, 2 * s + 1);
                            if (void 0 === this.device_map[n])
                                return alert("AC analysis refers to unknown source " + n),
                                "AC analysis failed, unknown source";
                            this.device_map[n].load_ac(this, this.rhs);
                            for (var c = new Array(2 * s + 1), p = 2 * s; p >= 0; --p)
                                c[p] = [];
                            for (var d = Math.exp(Math.LN10 / t), u = new Array(s), p = s - 1; p >= 0; --p)
                                u[p] = 0;
                            var f = i;
                            for (o *= 1.0001; f <= o; ) {
                                var _ = 2 * Math.PI * f;
                                c[2 * s].push(f);
                                for (var p = s - 1; p >= 0; --p) {
                                    l[p][2 * s] = this.rhs[p],
                                    l[p + s][2 * s] = 0;
                                    for (var v = s - 1; v >= 0; --v)
                                        l[p][v] = r[p][v],
                                        l[p + s][v + s] = r[p][v],
                                        l[p][v + s] = -_ * a[p][v],
                                        l[p + s][v] = _ * a[p][v]
                                }
                                for (var m = h(l), p = s - 1; p >= 0; --p) {
                                    var g = Math.sqrt(m[p] * m[p] + m[p + s] * m[p + s]);
                                    c[p].push(g);
                                    var y = Math.atan2(m[p + s], m[p]) / Math.PI * 180
                                      , b = c[p + s]
                                      , w = b.length;
                                    if (w > 1) {
                                        var x = y + u[p] - b[w - 1];
                                        x > 90 ? u[p] -= 360 : x < -90 && (u[p] += 360)
                                    }
                                    c[p + s].push(y + u[p])
                                }
                                f *= d
                            }
                            var A = [];
                            for (var M in this.node_map) {
                                var S = this.node_map[M];
                                A[M] = -1 == S ? 0 : c[S],
                                A[M + "_phase"] = -1 == S ? 0 : c[S + s]
                            }
                            return A._frequencies_ = c[2 * s],
                            A
                        }
                    }
                    ,
                    t.prototype.add_device = function(t, e) {
                        return this.devices.push(t),
                        t.name = e,
                        e && (void 0 === this.device_map[e] ? this.device_map[e] = t : (alert("Warning: two circuit elements share the same name " + e),
                        this.device_map[e] = t)),
                        t
                    }
                    ,
                    t.prototype.r = function(t, e, i, o) {
                        if ("string" != typeof i || void 0 !== (i = p(i, void 0))) {
                            if (0 != i) {
                                var n = new m(t,e,i);
                                return this.add_device(n, o)
                            }
                            return this.v(t, e, "0", o)
                        }
                    }
                    ,
                    t.prototype.d = function(t, e, i, o, n) {
                        if (("string" != typeof i || void 0 !== (i = p(i, void 0))) && 0 != i) {
                            var s = new g(t,e,i,o);
                            return this.add_device(s, n)
                        }
                    }
                    ,
                    t.prototype.c = function(t, e, i, o) {
                        if ("string" != typeof i || void 0 !== (i = p(i, void 0))) {
                            var n = new y(t,e,i);
                            return this.add_device(n, o)
                        }
                    }
                    ,
                    t.prototype.l = function(t, e, i, o) {
                        if ("string" != typeof i || void 0 !== (i = p(i, void 0))) {
                            var n = this.node(void 0, 1)
                              , s = new b(t,e,n,i);
                            return this.add_device(s, o)
                        }
                    }
                    ,
                    t.prototype.v = function(t, e, i, o) {
                        var n = this.node(void 0, 1)
                          , s = new _(t,e,n,i);
                        return this.voltage_sources.push(s),
                        this.add_device(s, o)
                    }
                    ,
                    t.prototype.i = function(t, e, i, o) {
                        var n = new v(t,e,i);
                        return this.current_sources.push(n),
                        this.add_device(n, o)
                    }
                    ,
                    t.prototype.opamp = function(t, e, i, o, n, s) {
                        if ("string" != typeof n || (p(n, void 0),
                        void 0 !== n)) {
                            var r = this.node(void 0, 1)
                              , a = new w(t,e,i,o,r,n,s);
                            return this.add_device(a, s)
                        }
                    }
                    ,
                    t.prototype.n = function(t, e, i, o, n) {
                        if ("string" != typeof o || void 0 !== (o = p(o, void 0))) {
                            var t = new x(t,e,i,o,n,"n");
                            return this.add_device(t, n)
                        }
                    }
                    ,
                    t.prototype.p = function(t, e, i, o, n) {
                        if ("string" != typeof o || void 0 !== (o = p(o, void 0))) {
                            var t = new x(t,e,i,o,n,"p");
                            return this.add_device(t, n)
                        }
                    }
                    ,
                    t.prototype.add_two_terminal = function(t, e, i, o) {
                        t >= 0 ? (o[t][t] += i,
                        e >= 0 && (o[t][e] -= i,
                        o[e][t] -= i,
                        o[e][e] += i)) : e >= 0 && (o[e][e] += i)
                    }
                    ,
                    t.prototype.get_two_terminal = function(t, e, i) {
                        var o = 0;
                        return t >= 0 && (o = i[t]),
                        e >= 0 && (o -= i[e]),
                        o
                    }
                    ,
                    t.prototype.add_conductance_l = function(t, e, i) {
                        this.add_two_terminal(t, e, i, this.Gl)
                    }
                    ,
                    t.prototype.add_conductance = function(t, e, i) {
                        this.add_two_terminal(t, e, i, this.G)
                    }
                    ,
                    t.prototype.add_capacitance = function(t, e, i) {
                        this.add_two_terminal(t, e, i, this.C)
                    }
                    ,
                    t.prototype.add_to_Gl = function(t, e, i) {
                        t >= 0 && e >= 0 && (this.Gl[t][e] += i)
                    }
                    ,
                    t.prototype.add_to_G = function(t, e, i) {
                        t >= 0 && e >= 0 && (this.G[t][e] += i)
                    }
                    ,
                    t.prototype.add_to_C = function(t, e, i) {
                        t >= 0 && e >= 0 && (this.C[t][e] += i)
                    }
                    ,
                    t.prototype.add_to_rhs = function(t, e, i) {
                        t >= 0 && (i[t] += e)
                    }
                    ,
                    t.prototype.algebraic = function(t) {
                        var i = t.length
                          , o = e(i, i);
                        s(t, o);
                        for (var n = r(o), a = new Array(i), h = 0; h < i; h++) {
                            for (var l = i - 1; l >= 0; --l)
                                o[h][l] = 0;
                            if (r(o) == n)
                                a[h] = 1;
                            else {
                                for (var l = i - 1; l >= 0; --l)
                                    o[h][l] = t[h][l];
                                a[h] = 0
                            }
                        }
                        return a
                    }
                    ,
                    l.prototype.finalize = function() {}
                    ,
                    l.prototype.load_linear = function(t) {}
                    ,
                    l.prototype.load_dc = function(t, e, i) {}
                    ,
                    l.prototype.load_tran = function(t, e) {}
                    ,
                    l.prototype.load_ac = function(t, e) {}
                    ,
                    l.prototype.breakpoint = function(t) {}
                    ,
                    t.prototype.parse_number = p,
                    Math.fmod = function(t, e) {
                        return t - Math.floor(t / e) * e
                    }
                    ,
                    _.prototype = new l,
                    _.prototype.constructor = _,
                    _.prototype.load_linear = function(t) {
                        t.add_to_Gl(this.branch, this.npos, 1),
                        t.add_to_Gl(this.branch, this.nneg, -1),
                        t.add_to_Gl(this.npos, this.branch, 1),
                        t.add_to_Gl(this.nneg, this.branch, -1)
                    }
                    ,
                    _.prototype.load_dc = function(t, e, i) {
                        t.add_to_rhs(this.branch, this.src.dc, i)
                    }
                    ,
                    _.prototype.load_tran = function(t, e, i, o) {
                        t.add_to_rhs(this.branch, this.src.value(o), i)
                    }
                    ,
                    _.prototype.breakpoint = function(t) {
                        return this.src.inflection_point(t)
                    }
                    ,
                    _.prototype.load_ac = function(t, e) {
                        t.add_to_rhs(this.branch, 1, e)
                    }
                    ,
                    v.prototype = new l,
                    v.prototype.constructor = v,
                    v.prototype.load_linear = function(t) {}
                    ,
                    v.prototype.load_dc = function(t, e, i) {
                        var o = this.src.dc;
                        t.add_to_rhs(this.npos, -o, i),
                        t.add_to_rhs(this.nneg, o, i)
                    }
                    ,
                    v.prototype.load_tran = function(t, e, i, o) {
                        var n = this.src.value(o);
                        t.add_to_rhs(this.npos, -n, i),
                        t.add_to_rhs(this.nneg, n, i)
                    }
                    ,
                    v.prototype.breakpoint = function(t) {
                        return this.src.inflection_point(t)
                    }
                    ,
                    v.prototype.load_ac = function(t, e) {
                        t.add_to_rhs(this.npos, -1, e),
                        t.add_to_rhs(this.nneg, 1, e)
                    }
                    ,
                    m.prototype = new l,
                    m.prototype.constructor = m,
                    m.prototype.load_linear = function(t) {
                        t.add_conductance_l(this.n1, this.n2, this.g)
                    }
                    ,
                    m.prototype.load_dc = function(t) {}
                    ,
                    m.prototype.load_tran = function(t, e) {}
                    ,
                    m.prototype.load_ac = function(t) {}
                    ,
                    g.prototype = new l,
                    g.prototype.constructor = g,
                    g.prototype.load_linear = function(t) {}
                    ,
                    g.prototype.load_dc = function(t, e, i) {
                        var o, n, s = t.get_two_terminal(this.anode, this.cathode, e), r = s / this.vt, a = Math.abs(r), h = a - this.exp_arg_max;
                        if (h > 0) {
                            var l = 1 + h + .5 * h * h;
                            o = this.exp_max * l,
                            n = this.exp_max * (1 + h)
                        } else
                            o = Math.exp(a),
                            n = o;
                        r < 0 && (o = 1 / o,
                        n = o * n * o);
                        var c = this.ais * (o - 1)
                          , p = this.ais * (n / this.vt);
                        t.add_to_rhs(this.anode, -c, i),
                        t.add_to_rhs(this.cathode, c, i),
                        t.add_conductance(this.anode, this.cathode, p)
                    }
                    ,
                    g.prototype.load_tran = function(t, e, i, o) {
                        this.load_dc(t, e, i)
                    }
                    ,
                    g.prototype.load_ac = function(t) {}
                    ,
                    y.prototype = new l,
                    y.prototype.constructor = y,
                    y.prototype.load_linear = function(t) {
                        t.add_capacitance(this.n1, this.n2, this.value)
                    }
                    ,
                    y.prototype.load_dc = function(t, e, i) {}
                    ,
                    y.prototype.load_ac = function(t) {}
                    ,
                    y.prototype.load_tran = function(t) {}
                    ,
                    b.prototype = new l,
                    b.prototype.constructor = b,
                    b.prototype.load_linear = function(t) {
                        t.add_to_Gl(this.n1, this.branch, 1),
                        t.add_to_Gl(this.n2, this.branch, -1),
                        t.add_to_Gl(this.branch, this.n1, -1),
                        t.add_to_Gl(this.branch, this.n2, 1),
                        t.add_to_C(this.branch, this.branch, this.value)
                    }
                    ,
                    b.prototype.load_dc = function(t, e, i) {}
                    ,
                    b.prototype.load_ac = function(t) {}
                    ,
                    b.prototype.load_tran = function(t) {}
                    ,
                    w.prototype = new l,
                    w.prototype.constructor = w,
                    w.prototype.load_linear = function(t) {
                        var e = 1 / this.gain;
                        t.add_to_Gl(this.no, this.branch, 1),
                        t.add_to_Gl(this.ng, this.branch, -1),
                        t.add_to_Gl(this.branch, this.no, e),
                        t.add_to_Gl(this.branch, this.ng, -e),
                        t.add_to_Gl(this.branch, this.np, -1),
                        t.add_to_Gl(this.branch, this.nn, 1)
                    }
                    ,
                    w.prototype.load_dc = function(t, e, i) {}
                    ,
                    w.prototype.load_ac = function(t) {}
                    ,
                    w.prototype.load_tran = function(t) {}
                    ,
                    x.prototype = new l,
                    x.prototype.constructor = x,
                    x.prototype.load_linear = function(t) {}
                    ,
                    x.prototype.load_dc = function(t, e, i) {
                        var o = this.type_sign * t.get_two_terminal(this.d, this.s, e);
                        if (o < 0) {
                            var n = this.d;
                            this.d = this.s,
                            this.s = n,
                            o = this.type_sign * t.get_two_terminal(this.d, this.s, e)
                        }
                        var s, r, a, h = this.type_sign * t.get_two_terminal(this.g, this.s, e), l = h - this.vt;
                        l > 0 && (l < o ? (s = this.beta * (1 + this.lambda * o) * l,
                        r = .5 * this.type_sign * s * l,
                        a = .5 * this.beta * l * l * this.lambda) : (s = this.beta * (1 + this.lambda * o),
                        r = this.type_sign * s * o * (l - .5 * o),
                        a = s * (l - o) + this.beta * this.lambda * o * (l - .5 * o),
                        s *= o),
                        t.add_to_rhs(this.d, -r, i),
                        t.add_to_rhs(this.s, r, i),
                        t.add_conductance(this.d, this.s, a),
                        t.add_to_G(this.s, this.s, s),
                        t.add_to_G(this.d, this.s, -s),
                        t.add_to_G(this.d, this.g, s),
                        t.add_to_G(this.s, this.g, -s))
                    }
                    ,
                    x.prototype.load_tran = function(t, e, i) {
                        this.load_dc(t, e, i)
                    }
                    ,
                    x.prototype.load_ac = function(t) {}
                    ,
                    {
                        Circuit: t,
                        parse_number: p,
                        parse_source: d
                    }
                }();
                window.update_schematics = o,
                schematic = function() {
                    function i(t) {
                        this.show_grid = !0,
                        this.grid = 8,
                        this.scale = 2,
                        this.origin_x = t.getAttribute("origin_x"),
                        void 0 == this.origin_x && (this.origin_x = 0),
                        this.origin_y = t.getAttribute("origin_y"),
                        void 0 == this.origin_y && (this.origin_y = 0),
                        this.cursor_x = 0,
                        this.cursor_y = 0,
                        this.window_list = [],
                        this.edits_allowed = !0;
                        var e = t.getAttribute("parts");
                        if (void 0 == e || "None" == e) {
                            e = [];
                            for (var i in _t)
                                e.push(i)
                        } else
                            "" == e ? (this.edits_allowed = !1,
                            e = []) : e = e.split(",");
                        this.parts_bin = [];
                        for (var o = 0; o < e.length; o++) {
                            var f = new z(this)
                              , _ = _t[e[o]];
                            f.set_component(new _[0](0,0,0), _[1]),
                            this.parts_bin.push(f)
                        }
                        var v = t.getAttribute("analyses");
                        v = void 0 == v || "None" == v ? ["dc", "ac", "tran"] : "" == v ? [] : v.split(","),
                        0 == e.length && 0 == v.length ? this.diagram_only = !0 : this.diagram_only = !1;
                        var m = t.getAttribute("submit_analyses");
                        m && -1 != m.indexOf("{") ? this.submit_analyses = JSON.parse(m) : this.submit_analyses = void 0,
                        this.tools = [],
                        this.toolbar = [],
                        this.edits_allowed && (this.tools.grid = this.add_tool(kt, "Grid: toggle grid display", this.toggle_grid),
                        this.enable_tool("grid", !0),
                        this.tools.cut = this.add_tool(Mt, "Cut: move selected components from diagram to the clipboard", this.cut),
                        this.tools.copy = this.add_tool(St, "Copy: copy selected components into the clipboard", this.copy),
                        this.tools.paste = this.add_tool(Ct, "Paste: copy clipboard into the diagram", this.paste),
                        this.toolbar.push(null)),
                        void 0 !== n && (-1 != v.indexOf("dc") && (this.tools.dc = this.add_tool("DC", "DC Analysis", this.dc_analysis),
                        this.enable_tool("dc", !0),
                        this.dc_max_iters = "1000"),
                        -1 != v.indexOf("ac") && (this.tools.ac = this.add_tool("AC", "AC Small-Signal Analysis", this.setup_ac_analysis),
                        this.enable_tool("ac", !0),
                        this.ac_npts = "50",
                        this.ac_fstart = "10",
                        this.ac_fstop = "1G",
                        this.ac_source_name = void 0),
                        -1 != v.indexOf("tran") && (this.tools.tran = this.add_tool("TRAN", "Transient Analysis", this.transient_analysis),
                        this.enable_tool("tran", !0),
                        this.tran_npts = "100",
                        this.tran_tstop = "1")),
                        this.canvas = document.createElement("canvas"),
                        this.width = t.getAttribute("width"),
                        this.width = parseInt(void 0 == this.width ? "400" : this.width),
                        this.canvas.width = this.width,
                        this.height = t.getAttribute("height"),
                        this.height = parseInt(void 0 == this.height ? "300" : this.height),
                        this.canvas.height = this.height,
                        this.sctl_r = 16,
                        this.sctl_x = this.sctl_r + 8,
                        this.sctl_y = this.sctl_r + 8,
                        this.zctl_left = this.sctl_x - 8,
                        this.zctl_top = this.sctl_y + this.sctl_r + 8,
                        this.bg_image = document.createElement("canvas"),
                        this.bg_image.width = this.width,
                        this.bg_image.height = this.height,
                        this.diagram_only || (this.canvas.tabIndex = 0,
                        this.canvas.style.borderStyle = "solid",
                        this.canvas.style.borderWidth = "1px",
                        this.canvas.style.borderColor = ft,
                        this.canvas.style.outline = "none"),
                        this.canvas.schematic = this,
                        this.edits_allowed && (this.canvas.addEventListener("mousemove", c, !1),
                        this.canvas.addEventListener("mouseover", a, !1),
                        this.canvas.addEventListener("mouseout", h, !1),
                        this.canvas.addEventListener("mousedown", l, !1),
                        this.canvas.addEventListener("mouseup", p, !1),
                        this.canvas.addEventListener("mousewheel", d, !1),
                        this.canvas.addEventListener("DOMMouseScroll", d, !1),
                        this.canvas.addEventListener("dblclick", u, !1),
                        this.canvas.addEventListener("keydown", s, !1),
                        this.canvas.addEventListener("keyup", r, !1)),
                        this.diagram_only ? this.status_div = void 0 : (this.status_div = document.createElement("div"),
                        this.status = document.createTextNode(""),
                        this.status_div.appendChild(this.status),
                        this.status_div.style.height = gt + "px"),
                        this.connection_points = [],
                        this.components = [],
                        this.dragging = !1,
                        this.select_rect = void 0,
                        this.wire = void 0,
                        this.operating_point = void 0,
                        this.dc_results = void 0,
                        this.ac_results = void 0,
                        this.transient_results = void 0,
                        this.ctrlKey = !1,
                        this.shiftKey = !1,
                        this.altKey = !1,
                        this.cmdKey = !1,
                        t.schematic = this,
                        this.input = t;
                        var g, y, b;
                        if (g = document.createElement("table"),
                        g.rules = "none",
                        this.diagram_only || (g.frame = "box",
                        g.style.borderStyle = "solid",
                        g.style.borderWidth = "2px",
                        g.style.borderColor = ut,
                        g.style.backgroundColor = pt),
                        this.toolbar.length > 0) {
                            y = document.createElement("tr"),
                            g.appendChild(y),
                            b = document.createElement("td"),
                            b.style.verticalAlign = "top",
                            b.colSpan = 2,
                            y.appendChild(b);
                            for (var o = 0; o < this.toolbar.length; ++o) {
                                var w = this.toolbar[o];
                                null != w && b.appendChild(w)
                            }
                        }
                        y = document.createElement("tr"),
                        g.appendChild(y),
                        b = document.createElement("td"),
                        y.appendChild(b);
                        var x = document.createElement("div");
                        b.appendChild(x),
                        x.style.position = "relative",
                        x.appendChild(this.canvas),
                        b = document.createElement("td"),
                        b.style.verticalAlign = "top",
                        y.appendChild(b);
                        var A = document.createElement("table");
                        b.appendChild(A),
                        A.rules = "none",
                        A.frame = "void",
                        A.cellPadding = "0",
                        A.cellSpacing = "0";
                        for (var M = Math.floor(this.height / (mt + 5)), o = 0; o < M; ++o) {
                            y = document.createElement("tr"),
                            A.appendChild(y);
                            for (var S = o; S < this.parts_bin.length; S += M)
                                b = document.createElement("td"),
                                y.appendChild(b),
                                b.appendChild(this.parts_bin[S].canvas)
                        }
                        void 0 != this.status_div && (y = document.createElement("tr"),
                        g.appendChild(y),
                        b = document.createElement("td"),
                        y.appendChild(b),
                        b.colSpan = 2,
                        b.appendChild(this.status_div));
                        var C = document.createElement("div");
                        C.onselectstart = function() {
                            return !1
                        }
                        ,
                        C.appendChild(g),
                        this.input.parentNode.insertBefore(C, this.input.nextSibling),
                        this.load_schematic(this.input.getAttribute("value"), this.input.getAttribute("initial_value")),
                        this.zoomall()
                    }
                    function o(t, e, i) {
                        if (void 0 != i)
                            for (var o = 0; o < e.length; o++)
                                if (t < e[o]) {
                                    var n = 0 == o ? e[0] : e[o - 1]
                                      , s = e[o];
                                    if (void 0 == s)
                                        return;
                                    var r = 0 == o ? i[0] : i[o - 1]
                                      , a = i[o]
                                      , h = r;
                                    return t != n && (h += (t - n) * (a - r) / (s - n)),
                                    h
                                }
                    }
                    function s(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement.schematic : t.target.schematic
                          , i = t.keyCode;
                        if (16 == i)
                            e.shiftKey = !0;
                        else if (17 == i)
                            e.ctrlKey = !0;
                        else if (18 == i)
                            e.altKey = !0;
                        else {
                            if (91 != i) {
                                if (8 == i || 46 == i) {
                                    for (var o = e.components.length - 1; o >= 0; --o) {
                                        var n = e.components[o];
                                        n.selected && n.remove()
                                    }
                                    return e.clean_up_wires(),
                                    e.redraw_background(),
                                    t.preventDefault(),
                                    !1
                                }
                                if ((e.ctrlKey || e.cmdKey) && 88 == i)
                                    return e.cut(),
                                    t.preventDefault(),
                                    !1;
                                if ((e.ctrlKey || e.cmdKey) && 67 == i)
                                    return e.copy(),
                                    t.preventDefault(),
                                    !1;
                                if ((e.ctrlKey || e.cmdKey) && 86 == i)
                                    return e.paste(),
                                    t.preventDefault(),
                                    !1;
                                if (e.ctrlKey || e.altKey || e.cmdKey || 82 != i)
                                    return !0;
                                for (var o = e.components.length - 1; o >= 0; --o) {
                                    var n = e.components[o];
                                    n.selected && (n.rotate(1),
                                    e.check_wires(n))
                                }
                                return e.clean_up_wires(),
                                e.redraw_background(),
                                t.preventDefault(),
                                !1
                            }
                            e.cmdKey = !0
                        }
                        return e.redraw(),
                        t.preventDefault(),
                        !1
                    }
                    function r(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement.schematic : t.target.schematic
                          , i = t.keyCode;
                        16 == i ? e.shiftKey = !1 : 17 == i ? e.ctrlKey = !1 : 18 == i ? e.altKey = !1 : 91 == i && (e.cmdKey = !1)
                    }
                    function a(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement.schematic : t.target.schematic;
                        if (e.new_part) {
                            var i = e.new_part;
                            e.new_part = void 0,
                            i.select(!1),
                            e.unselect_all(-1),
                            e.redraw_background(),
                            i = i.component.clone(e.cursor_x, e.cursor_y),
                            i.add(e),
                            i.set_select(!0),
                            e.drag_begin()
                        }
                        return e.drawCursor = !0,
                        e.redraw(),
                        e.canvas.focus(),
                        !1
                    }
                    function h(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement.schematic : t.target.schematic;
                        return e.drawCursor = !1,
                        e.redraw(),
                        !1
                    }
                    function l(t) {
                        t ? t.preventDefault() : t = window.event;
                        var e = window.event ? t.srcElement.schematic : t.target.schematic;
                        e.canvas.relMouseCoords(t);
                        var i = e.canvas.mouse_x
                          , o = e.canvas.mouse_y
                          , n = i - e.sctl_x
                          , s = o - e.sctl_y
                          , r = i - e.zctl_left
                          , a = o - e.zctl_top;
                        if (n * n + s * s <= e.sctl_r * e.sctl_r)
                            if (Math.abs(s) > Math.abs(n)) {
                                var h = this.height / 8;
                                s > 0 && (h = -h);
                                var l = e.origin_y - h;
                                l > xt * e.grid && l < At * e.grid && (e.origin_y = l)
                            } else {
                                var h = this.width / 8;
                                n < 0 && (h = -h);
                                var l = e.origin_x + h;
                                l > xt * e.grid && l < At * e.grid && (e.origin_x = l)
                            }
                        else if (r >= 0 && r < 16 && a >= 0 && a < 48)
                            a < 16 ? e.zoomin() : a < 32 ? e.zoomout() : e.zoomall();
                        else {
                            var c = i / e.scale + e.origin_x
                              , p = o / e.scale + e.origin_y;
                            e.cursor_x = Math.round(c / e.grid) * e.grid,
                            e.cursor_y = Math.round(p / e.grid) * e.grid;
                            var d = e.connection_points[e.cursor_x + "," + e.cursor_y];
                            if (d && !t.shiftKey)
                                e.unselect_all(-1),
                                e.wire = [e.cursor_x, e.cursor_y, e.cursor_x, e.cursor_y];
                            else {
                                for (var u = -1, f = e.components.length - 1; f >= 0; --f)
                                    if (e.components[f].select(c, p, t.shiftKey)) {
                                        e.components[f].selected && (e.drag_begin(),
                                        u = f);
                                        break
                                    }
                                var _ = -1 != u && e.components[u].was_previously_selected;
                                t.shiftKey || (_ || e.unselect_all(u),
                                e.dragging || (e.select_rect = [e.canvas.mouse_x, e.canvas.mouse_y, e.canvas.mouse_x, e.canvas.mouse_y]))
                            }
                        }
                        return e.redraw_background(),
                        !1
                    }
                    function c(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement.schematic : t.target.schematic;
                        e.canvas.relMouseCoords(t);
                        var i = e.canvas.mouse_x / e.scale + e.origin_x
                          , o = e.canvas.mouse_y / e.scale + e.origin_y;
                        if (e.cursor_x = Math.round(i / e.grid) * e.grid,
                        e.cursor_y = Math.round(o / e.grid) * e.grid,
                        e.wire)
                            e.wire[2] = e.cursor_x,
                            e.wire[3] = e.cursor_y;
                        else if (e.dragging) {
                            var n = e.cursor_x - e.drag_x
                              , s = e.cursor_y - e.drag_y;
                            if (0 != n || 0 != s) {
                                e.drag_x = e.cursor_x,
                                e.drag_y = e.cursor_y;
                                for (var r = e.components.length - 1; r >= 0; --r) {
                                    var a = e.components[r];
                                    a.selected && a.move(n, s)
                                }
                            }
                        } else
                            e.select_rect && (e.select_rect[2] = e.canvas.mouse_x,
                            e.select_rect[3] = e.canvas.mouse_y);
                        return e.redraw(),
                        !1
                    }
                    function p(t) {
                        t ? t.preventDefault() : t = window.event;
                        var e = window.event ? t.srcElement.schematic : t.target.schematic;
                        if (e.wire) {
                            var i = e.wire;
                            e.wire = void 0,
                            i[0] != i[2] || i[1] != i[3] ? (e.add_wire(i[0], i[1], i[2], i[3]),
                            e.clean_up_wires(),
                            e.redraw_background()) : e.redraw()
                        }
                        if (e.dragging && e.drag_end(),
                        e.select_rect) {
                            var i = e.select_rect;
                            if (i[0] != i[2] || i[1] != i[3]) {
                                var o = [i[0] / e.scale + e.origin_x, i[1] / e.scale + e.origin_y, i[2] / e.scale + e.origin_x, i[3] / e.scale + e.origin_y];
                                j(o),
                                t.shiftKey || e.unselect_all();
                                for (var n = e.components.length - 1; n >= 0; --n)
                                    e.components[n].select_rect(o, t.shiftKey)
                            }
                            e.select_rect = void 0,
                            e.redraw_background()
                        }
                        return !1
                    }
                    function d(t) {
                        t ? t.preventDefault() : t = window.event;
                        var e = window.event ? t.srcElement.schematic : t.target.schematic
                          , i = 0;
                        if (t.wheelDelta ? i = t.wheelDelta : t.detail && (i = -t.detail),
                        i) {
                            var o = i > 0 ? e.scale * yt : e.scale / yt;
                            if (o > bt && o < wt) {
                                e.canvas.relMouseCoords(t);
                                var n = 1 / e.scale - 1 / o;
                                e.origin_x += e.canvas.mouse_x * n,
                                e.origin_y += e.canvas.mouse_y * n,
                                e.scale = o,
                                e.redraw_background()
                            }
                        }
                    }
                    function u(t) {
                        t ? t.preventDefault() : t = window.event;
                        var e = window.event ? t.srcElement.schematic : t.target.schematic;
                        e.canvas.relMouseCoords(t);
                        var i = e.canvas.mouse_x / e.scale + e.origin_x
                          , o = e.canvas.mouse_y / e.scale + e.origin_y;
                        e.cursor_x = Math.round(i / e.grid) * e.grid,
                        e.cursor_y = Math.round(o / e.grid) * e.grid;
                        for (var n = e.components.length - 1; n >= 0 && !e.components[n].edit_properties(i, o); --n)
                            ;
                        return !1
                    }
                    function f(t) {
                        t || (t = window.event),
                        w((window.event ? t.srcElement.dialog : t.target.dialog).win)
                    }
                    function _(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement.dialog : t.target.dialog;
                        w(e.win),
                        e.callback && e.callback(e.content)
                    }
                    function v(t) {
                        13 == (window.event ? window.event.keyCode : t.keyCode) && _(t)
                    }
                    function m(t) {
                        var e = document.createElement("table");
                        for (var i in t) {
                            var o = document.createTextNode(i + ": ")
                              , n = document.createElement("td");
                            n.appendChild(o);
                            var s = document.createElement("td");
                            s.appendChild(t[i]);
                            var r = document.createElement("tr");
                            r.appendChild(n),
                            r.appendChild(s),
                            r.style.verticalAlign = "center",
                            e.appendChild(r)
                        }
                        return e
                    }
                    function g(t, e, i) {
                        var o = document.createElement("input");
                        return o.type = t,
                        o.size = e,
                        o.className = "property",
                        o.value = void 0 == i ? "" : i.toString(),
                        o
                    }
                    function y(t, e) {
                        for (var i = document.createElement("select"), o = 0; o < t.length; o++) {
                            var n = document.createElement("option");
                            n.text = t[o],
                            i.add(n),
                            t[o] == e && (i.selectedIndex = o)
                        }
                        return i
                    }
                    function b(t, e) {
                        var i = t.sch.window_list
                          , o = i.indexOf(t);
                        for (-1 != o && i.splice(o, 1),
                        e && i.push(t),
                        o = 0; o < i.length; o += 1)
                            i[o].style.zIndex = 1e3 + o
                    }
                    function w(t) {
                        t.parentNode.removeChild(t),
                        b(t, !1)
                    }
                    function x(t) {
                        t || (t = window.event),
                        w((window.event ? t.srcElement : t.target).win)
                    }
                    function A(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement : t.target
                          , i = e.win;
                        return b(i, !0),
                        document.addEventListener("mousemove", S, !1),
                        document.addEventListener("mouseup", M, !1),
                        document.tracking_window = i,
                        i.drag_x = t.pageX,
                        i.drag_y = t.pageY,
                        !1
                    }
                    function M(t) {
                        var e = document.tracking_window;
                        return document.removeEventListener("mousemove", S, !1),
                        document.removeEventListener("mouseup", M, !1),
                        document.tracking_window = void 0,
                        e.drag_x = void 0,
                        e.drag_y = void 0,
                        !0
                    }
                    function S(t) {
                        var e = document.tracking_window;
                        if (e.drag_x) {
                            var i = t.pageX - e.drag_x
                              , o = t.pageY - e.drag_y;
                            return e.left += i,
                            e.top += o,
                            e.style.left = e.left + "px",
                            e.style.top = e.top + "px",
                            e.drag_x += i,
                            e.drag_y += o,
                            !0
                        }
                    }
                    function C(t) {
                        t || (t = window.event);
                        var e = t.target;
                        "img" != t.target.tagName.toLowerCase() && "span" != t.target.tagName.toLowerCase() || (e = t.target.parentNode),
                        e.enabled && e.sch.message(e.tip),
                        t.stopPropagation()
                    }
                    function T(t) {
                        t || (t = window.event);
                        var e = t.target;
                        "img" != t.target.tagName.toLowerCase() && "span" != t.target.tagName.toLowerCase() || (e = t.target.parentNode),
                        e.enabled && e.sch.message(""),
                        t.stopPropagation()
                    }
                    function k(t) {
                        t || (t = window.event);
                        var e = t.target;
                        "img" != t.target.tagName.toLowerCase() && "span" != t.target.tagName.toLowerCase() || (e = t.target.parentNode),
                        e.enabled && (e.sch.canvas.relMouseCoords(t),
                        e.callback.call(e.sch)),
                        t.stopPropagation()
                    }
                    function E(t, e) {
                        t == e && (0 == t ? (t = -.5,
                        e = .5) : (t = t > 0 ? .9 * t : 1.1 * t,
                        e = e > 0 ? 1.1 * e : .9 * e));
                        var i = Math.log(e - t) / Math.LN10
                          , o = Math.floor(i)
                          , n = Math.pow(10, -o);
                        return t = Math.floor(n * t) / n,
                        e = Math.ceil(n * e) / n,
                        [t, e, 1 / n]
                    }
                    function B(t, e, i) {
                        if (0 == t)
                            return "0";
                        if (void 0 == t)
                            return "undefined";
                        void 0 == i && (i = !0);
                        var o = t < 0 ? -1 : 1
                          , n = Math.log(o * t) / Math.LN10
                          , s = Math.floor(n / 3)
                          , r = o * Math.pow(10, n - 3 * s)
                          , a = (r + .5 * o * Math.pow(10, -e)).toString()
                          , h = a.length
                          , l = a.indexOf(".");
                        if (-1 != l) {
                            if (e > 0 && (l += e + 1,
                            l > h && (l = h),
                            i)) {
                                for (; "0" == a.charAt(l - 1); )
                                    l -= 1;
                                "." == a.charAt(l - 1) && (l -= 1)
                            }
                            l < h && (a = a.substring(0, l))
                        }
                        switch (s) {
                        case -5:
                            return a + "f";
                        case -4:
                            return a + "p";
                        case -3:
                            return a + "n";
                        case -2:
                            return a + "u";
                        case -1:
                            return a + "m";
                        case 0:
                            return a;
                        case 1:
                            return a + "K";
                        case 2:
                            return a + "M";
                        case 3:
                            return a + "G"
                        }
                        return t.toString()
                    }
                    function L(t) {
                        for (var e = -1 / 0, i = t.length - 1; i >= 0; --i)
                            t[i] > e && (e = t[i]);
                        return e
                    }
                    function N(t) {
                        for (var e = 1 / 0, i = t.length - 1; i >= 0; --i)
                            t[i] < e && (e = t[i]);
                        return e
                    }
                    function P(t, e, i, o) {
                        var n = e.left_margin + i
                          , s = e.top_margin + e.pheight + e.tick_length;
                        t.strokeStyle = ft,
                        t.lineWidth = 1,
                        t.beginPath(),
                        t.dashedLineTo(n, e.top_margin, n, s, Bt),
                        t.stroke();
                        var r = i / e.x_scale + e.x_min;
                        t.font = "10pt sans-serif",
                        t.textAlign = "center",
                        t.textBaseline = "top",
                        t.fillStyle = pt,
                        t.fillText("█████", n, s),
                        t.fillStyle = ut,
                        t.fillText(B(r, 3, !1), n, s);
                        for (var a = e.x_values, h = a.length, l = 0; l < h && r >= a[l]; )
                            l += 1;
                        var c = 0 == l ? a[0] : a[l - 1]
                          , p = a[l];
                        if (void 0 != p) {
                            t.textAlign = "left";
                            var d = e.left_margin + o
                              , u = e.top_margin;
                            if (void 0 != e.y_values)
                                for (var f = 0; f < e.y_values.length; f++) {
                                    var _ = e.y_values[f][2]
                                      , v = Gt[e.y_values[f][0]];
                                    if (void 0 != _ && void 0 != v) {
                                        var m = 0 == l ? _[0] : _[l - 1]
                                          , g = _[l]
                                          , y = m;
                                        r != c && (y += (r - c) * (g - m) / (p - c)),
                                        t.fillStyle = dt,
                                        t.fillText("█████", d - 3, u),
                                        t.fillStyle = v,
                                        t.fillText(B(y, 3, !1), d, u),
                                        u += 14
                                    }
                                }
                            if (t.textAlign = "right",
                            void 0 != e.z_values)
                                for (var d = e.left_margin + e.pwidth - o, u = e.top_margin, f = 0; f < e.z_values.length; f++) {
                                    var _ = e.z_values[f][2]
                                      , v = Gt[e.z_values[f][0]];
                                    if (void 0 != _ && void 0 != v) {
                                        var b = 0 == l ? _[0] : _[l - 1]
                                          , w = _[l]
                                          , x = b;
                                        r != c && (x += (r - c) * (w - b) / (p - c)),
                                        t.fillStyle = dt,
                                        t.fillText("█████", d + 3, u),
                                        t.fillStyle = v,
                                        t.fillText(B(x, 3, !1), d, u),
                                        u += 14
                                    }
                                }
                        }
                    }
                    function q(t) {
                        var e = t.getContext("2d");
                        e.drawImage(t.bg_image, 0, 0),
                        void 0 != t.cursor1_x && P(e, t, t.cursor1_x, 4),
                        void 0 != t.cursor2_x && P(e, t, t.cursor2_x, 30)
                    }
                    function I(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement : t.target;
                        e.relMouseCoords(t);
                        var i = e.mouse_x - e.left_margin - 3
                          , o = e.pheight - (e.mouse_y - e.top_margin) + 3;
                        i >= 0 && i <= e.pwidth && o >= 0 && o <= e.pheight ? e.cursor1_x = i : (e.cursor1_x = void 0,
                        e.cursor2_x = void 0),
                        q(e)
                    }
                    function z(t) {
                        this.sch = t,
                        this.component = void 0,
                        this.selected = !1,
                        this.canvas = document.createElement("canvas"),
                        this.canvas.style.borderStyle = "solid",
                        this.canvas.style.borderWidth = "1px",
                        this.canvas.style.borderColor = pt,
                        this.canvas.style.cursor = "default",
                        this.canvas.height = vt,
                        this.canvas.width = mt,
                        this.canvas.xpart = this,
                        this.canvas.addEventListener("mouseover", G, !1),
                        this.canvas.addEventListener("mouseout", R, !1),
                        this.canvas.addEventListener("mousedown", H, !1),
                        this.canvas.addEventListener("mouseup", W, !1),
                        this.canvas.addEventListener("click", function() {}, !1)
                    }
                    function G(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement : t.target
                          , i = e.xpart;
                        return e.style.borderColor = ut,
                        i.sch.message(i.tip + ": drag onto diagram to insert"),
                        !1
                    }
                    function R(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement : t.target
                          , i = e.xpart;
                        return i.sch.new_part,
                        e.style.borderColor = pt,
                        i.sch.message(""),
                        !1
                    }
                    function H(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement.xpart : t.target.xpart;
                        return e.select(!0),
                        e.sch.new_part = e,
                        !1
                    }
                    function W(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement.xpart : t.target.xpart;
                        return e.select(!1),
                        e.sch.new_part = void 0,
                        !1
                    }
                    function j(t) {
                        var e;
                        t[0] > t[2] && (e = t[0],
                        t[0] = t[2],
                        t[2] = e),
                        t[1] > t[3] && (e = t[1],
                        t[1] = t[3],
                        t[3] = e)
                    }
                    function U(t, e, i) {
                        return e <= t && t <= i
                    }
                    function F(t, e, i) {
                        return U(e, t[0], t[2]) && U(i, t[1], t[3])
                    }
                    function D(t, e) {
                        return !(e[0] > t[2] || e[2] < t[0] || e[1] > t[3] || e[3] < t[1])
                    }
                    function J(t, e, i, o) {
                        this.sch = void 0,
                        this.type = t,
                        this.x = e,
                        this.y = i,
                        this.rotation = o,
                        this.selected = !1,
                        this.properties = [],
                        this.bounding_box = [0, 0, 0, 0],
                        this.bbox = this.bounding_box,
                        this.connections = []
                    }
                    function O(t, e, i) {
                        this.parent = t,
                        this.offset_x = e,
                        this.offset_y = i,
                        this.location = "",
                        this.update_location(),
                        this.label = void 0
                    }
                    function K(t, e, i) {
                        return 0 == t.x * (e.y - i.y) + e.x * (i.y - t.y) + i.x * (t.y - e.y)
                    }
                    function Y(t, e, i, o) {
                        J.call(this, "w", t, e, 0),
                        this.dx = i - t,
                        this.dy = o - e,
                        this.add_connection(0, 0),
                        this.add_connection(this.dx, this.dy);
                        var n = [0, 0, this.dx, this.dy];
                        j(n),
                        n[0] -= It,
                        n[1] -= It,
                        n[2] += It,
                        n[3] += It,
                        this.bounding_box = n,
                        this.update_coords(),
                        this.len = Math.sqrt(this.dx * this.dx + this.dy * this.dy)
                    }
                    function Q(t, e, i) {
                        J.call(this, "g", t, e, i),
                        this.add_connection(0, 0),
                        this.bounding_box = [-6, 0, 6, 8],
                        this.update_coords()
                    }
                    function V(t, e, i, o) {
                        J.call(this, "L", t, e, i),
                        this.properties.label = o || "???",
                        this.add_connection(0, 0),
                        this.bounding_box = [-2, 0, 2, 8],
                        this.update_coords()
                    }
                    function X(t, e, i, o, n) {
                        J.call(this, "s", t, e, i),
                        this.add_connection(0, 0),
                        this.properties.color = o || "cyan",
                        this.properties.offset = void 0 == n || "" == n ? "0" : n,
                        this.bounding_box = [0, 0, 27, -21],
                        this.update_coords()
                    }
                    function Z(t, e, i, o, n) {
                        J.call(this, "a", t, e, i),
                        this.add_connection(0, 0),
                        this.add_connection(16, 0),
                        this.properties.color = o || "magenta",
                        this.properties.offset = void 0 == n || "" == n ? "0" : n,
                        this.bounding_box = [-3, 0, 16, 3],
                        this.update_coords()
                    }
                    function $(t, e, i, o, n) {
                        J.call(this, "r", t, e, i),
                        this.properties.name = o,
                        this.properties.r = n || "1",
                        this.add_connection(0, 0),
                        this.add_connection(0, 48),
                        this.bounding_box = [-5, 0, 5, 48],
                        this.update_coords()
                    }
                    function tt(t, e, i, o, n) {
                        J.call(this, "c", t, e, i),
                        this.properties.name = o,
                        this.properties.c = n || "1p",
                        this.add_connection(0, 0),
                        this.add_connection(0, 48),
                        this.bounding_box = [-8, 0, 8, 48],
                        this.update_coords()
                    }
                    function et(t, e, i, o, n) {
                        J.call(this, "l", t, e, i),
                        this.properties.name = o,
                        this.properties.l = n || "1n",
                        this.add_connection(0, 0),
                        this.add_connection(0, 48),
                        this.bounding_box = [-4, 0, 5, 48],
                        this.update_coords()
                    }
                    function it(t, e, i, o, n, s) {
                        J.call(this, "d", t, e, i),
                        this.properties.name = o,
                        this.properties.area = n || "1",
                        this.properties.type = s || "normal",
                        this.add_connection(0, 0),
                        this.add_connection(0, 48),
                        this.bounding_box = "ideal" == s ? [-12, 0, 12, 48] : [-8, 0, 8, 48],
                        this.update_coords()
                    }
                    function ot(t, e, i, o, n) {
                        J.call(this, "n", t, e, i),
                        this.properties.name = o,
                        this.properties["W/L"] = n || "2",
                        this.add_connection(0, 0),
                        this.add_connection(-24, 24),
                        this.add_connection(0, 48),
                        this.bounding_box = [-24, 0, 8, 48],
                        this.update_coords()
                    }
                    function nt(t, e, i, o, n) {
                        J.call(this, "p", t, e, i),
                        this.properties.name = o,
                        this.properties["W/L"] = n || "2",
                        this.add_connection(0, 0),
                        this.add_connection(-24, 24),
                        this.add_connection(0, 48),
                        this.bounding_box = [-24, 0, 8, 48],
                        this.update_coords()
                    }
                    function st(t, e, i, o, n) {
                        J.call(this, "o", t, e, i),
                        this.properties.name = o,
                        this.properties.A = n || "30000",
                        this.add_connection(0, 0),
                        this.add_connection(0, 16),
                        this.add_connection(48, 8),
                        this.add_connection(24, 32),
                        this.bounding_box = [0, -8, 48, 32],
                        this.update_coords()
                    }
                    function rt(t, e, i, o, n, s) {
                        J.call(this, n, t, e, i),
                        this.properties.name = o,
                        void 0 == s && (s = "dc(1)"),
                        this.properties.value = s,
                        this.add_connection(0, 0),
                        this.add_connection(0, 48),
                        this.bounding_box = [-12, 0, 12, 48],
                        this.update_coords(),
                        this.content = document.createElement("div")
                    }
                    function at(t) {
                        t || (t = window.event);
                        var e = window.event ? t.srcElement : t.target
                          , i = e.options[e.selectedIndex].value
                          , o = void 0;
                        void 0 != this.src && i == this.src.fun ? o = this.src : void 0 !== n && (o = n.parse_source(i + "()")),
                        e.component.build_content(o)
                    }
                    function ht(t, e, i, o, n) {
                        rt.call(this, t, e, i, o, "v", n),
                        this.type = "v"
                    }
                    function lt(t, e, i, o, n) {
                        rt.call(this, t, e, i, o, "i", n),
                        this.type = "i"
                    }
                    function ct(e, i) {
                        var o = t(this).slider("option", "schematic")
                          , n = t(this).slider("option", "component")
                          , s = t(this).slider("option", "property")
                          , r = t(this).slider("option", "suffix");
                        "string" != typeof r && (r = "");
                        var a = i.value;
                        t(this).slider("value", a);
                        var h = t(this).slider("option", "choices");
                        return h instanceof Array && (a = h[a]),
                        t("." + o).each(function(t, e) {
                            e.schematic.set_property(n, s, a.toString() + r)
                        }),
                        "dc" == t(this).slider("option", "analysis") && t("." + o).each(function(t, e) {
                            e.schematic.dc_analysis()
                        }),
                        !1
                    }
                    var pt = "rgb(220,220,220)"
                      , dt = "rgb(255,255,255)"
                      , ut = "rgb(0,0,0)"
                      , ft = "rgb(128,128,128)"
                      , _t = {
                        g: [Q, "Ground connection"],
                        L: [V, "Node label"],
                        v: [ht, "Voltage source"],
                        i: [lt, "Current source"],
                        r: [$, "Resistor"],
                        c: [tt, "Capacitor"],
                        l: [et, "Inductor"],
                        o: [st, "Op Amp"],
                        d: [it, "Diode"],
                        n: [ot, "NFet"],
                        p: [nt, "PFet"],
                        s: [X, "Voltage Probe"],
                        a: [Z, "Current Probe"]
                    };
                    "undefined" == typeof sch_clipboard && (sch_clipboard = []);
                    var vt = 42
                      , mt = 42
                      , gt = 18;
                    i.prototype.add_component = function(t) {
                        this.components.push(t)
                    }
                    ,
                    i.prototype.remove_component = function(t) {
                        var e = this.components.indexOf(t);
                        -1 != e && this.components.splice(e, 1)
                    }
                    ,
                    i.prototype.find_connections = function(t) {
                        return this.connection_points[t.location]
                    }
                    ,
                    i.prototype.add_connection_point = function(t) {
                        var e = this.connection_points[t.location];
                        return e ? e.push(t) : (e = [t],
                        this.connection_points[t.location] = e),
                        e
                    }
                    ,
                    i.prototype.remove_connection_point = function(t, e) {
                        var i = this.connection_points[e];
                        if (i) {
                            var o = i.indexOf(t);
                            -1 != o && (i.splice(o, 1),
                            0 == i.length && delete this.connection_points[e])
                        }
                    }
                    ,
                    i.prototype.update_connection_point = function(t, e) {
                        return this.remove_connection_point(t, e),
                        this.add_connection_point(t)
                    }
                    ,
                    i.prototype.add_wire = function(t, e, i, o) {
                        var n = new Y(t,e,i,o);
                        return n.add(this),
                        n.move_end(),
                        n
                    }
                    ,
                    i.prototype.split_wire = function(t, e) {
                        t.remove(),
                        this.add_wire(t.x, t.y, e.x, e.y),
                        this.add_wire(t.x + t.dx, t.y + t.dy, e.x, e.y)
                    }
                    ,
                    i.prototype.check_wires = function(t) {
                        for (var e = 0; e < this.components.length; e++) {
                            var i = this.components[e];
                            if (i != t) {
                                var o = i.bisect(t);
                                o && (this.split_wire(i, o),
                                this.redraw_background())
                            }
                        }
                    }
                    ,
                    i.prototype.check_connection_points = function(t) {
                        for (var e in this.connection_points) {
                            var i = this.connection_points[e];
                            if (i && t.bisect_cp(i[0]))
                                return this.split_wire(t, i[0]),
                                void this.redraw_background()
                        }
                    }
                    ,
                    i.prototype.clean_up_wires = function() {
                        for (var t in this.connection_points) {
                            var e = this.connection_points[t];
                            if (e && 2 == e.length) {
                                var i = e[0].parent
                                  , o = e[1].parent;
                                if ("w" == i.type && "w" == o.type) {
                                    var n = i.other_end(e[0])
                                      , s = o.other_end(e[1]);
                                    K(n, s, e[0]) && (i.remove(),
                                    o.remove(),
                                    this.add_wire(n.x, n.y, s.x, s.y))
                                }
                            }
                        }
                    }
                    ,
                    i.prototype.unselect_all = function(t) {
                        this.operating_point = void 0;
                        for (var e = this.components.length - 1; e >= 0; --e)
                            e != t && this.components[e].set_select(!1)
                    }
                    ,
                    i.prototype.drag_begin = function() {
                        for (var t = this.components.length - 1; t >= 0; --t) {
                            var e = this.components[t];
                            e.selected && e.move_begin()
                        }
                        this.drag_x = this.cursor_x,
                        this.drag_y = this.cursor_y,
                        this.dragging = !0
                    }
                    ,
                    i.prototype.drag_end = function() {
                        for (var t = this.components.length - 1; t >= 0; --t) {
                            var e = this.components[t];
                            e.selected && e.move_end()
                        }
                        this.dragging = !1,
                        this.clean_up_wires(),
                        this.redraw_background()
                    }
                    ,
                    i.prototype.help = function() {
                        window.open("/static/handouts/schematic_tutorial.pdf")
                    }
                    ,
                    i.prototype.rescale = function(t, e, i) {
                        void 0 == e && (e = this.origin_x + this.width / (2 * this.scale),
                        i = this.origin_y + this.height / (2 * this.scale)),
                        this.origin_x += e * (this.scale - t),
                        this.origin_y += i * (this.scale - t),
                        this.scale = t,
                        this.redraw_background()
                    }
                    ,
                    i.prototype.toggle_grid = function() {
                        this.show_grid = !this.show_grid,
                        this.redraw_background()
                    }
                    ;
                    var yt = 1.25
                      , bt = .5
                      , wt = 4
                      , xt = -200
                      , At = 200;
                    i.prototype.zoomin = function() {
                        var t = this.scale * yt;
                        t < wt && (this.origin_x += this.width / 2 * (1 / this.scale - 1 / t),
                        this.origin_y += this.height / 2 * (1 / this.scale - 1 / t),
                        this.scale = t,
                        this.redraw_background())
                    }
                    ,
                    i.prototype.zoomout = function() {
                        var t = this.scale / yt;
                        t > bt && (this.origin_x += this.width / 2 * (1 / this.scale - 1 / t),
                        this.origin_y += this.height / 2 * (1 / this.scale - 1 / t),
                        this.scale = t,
                        this.redraw_background())
                    }
                    ,
                    i.prototype.zoomall = function() {
                        var t = 1.5 * (this.bbox[2] - this.bbox[0])
                          , e = 1.5 * (this.bbox[3] - this.bbox[1]);
                        if (0 == t && 0 == e)
                            this.origin_x = 0,
                            this.origin_y = 0,
                            this.scale = 2;
                        else {
                            var i = this.width / t
                              , o = this.height / e;
                            this.scale = Math.pow(yt, Math.ceil(Math.log(Math.min(i, o)) / Math.log(yt))),
                            this.scale < bt ? this.scale = bt : this.scale > wt && (this.scale = wt),
                            this.origin_x = (this.bbox[2] + this.bbox[0]) / 2 - this.width / (2 * this.scale),
                            this.origin_y = (this.bbox[3] + this.bbox[1]) / 2 - this.height / (2 * this.scale)
                        }
                        this.redraw_background()
                    }
                    ,
                    i.prototype.cut = function() {
                        sch_clipboard = [];
                        for (var t = this.components.length - 1; t >= 0; --t) {
                            var e = this.components[t];
                            e.selected && (e.remove(),
                            sch_clipboard.push(e))
                        }
                        this.redraw()
                    }
                    ,
                    i.prototype.copy = function() {
                        sch_clipboard = [];
                        for (var t = this.components.length - 1; t >= 0; --t) {
                            var e = this.components[t];
                            e.selected && sch_clipboard.push(e.clone(e.x, e.y))
                        }
                    }
                    ,
                    i.prototype.paste = function() {
                        for (var t = void 0, e = void 0, i = sch_clipboard.length - 1; i >= 0; --i) {
                            var o = sch_clipboard[i];
                            t = t ? Math.min(t, o.x) : o.x,
                            e = e ? Math.min(e, o.y) : o.y
                        }
                        this.message("cursor " + this.cursor_x + "," + this.cursor_y),
                        this.unselect_all(-1),
                        this.redraw_background();
                        for (var i = sch_clipboard.length - 1; i >= 0; --i) {
                            var o = sch_clipboard[i]
                              , n = o.clone(this.cursor_x + (o.x - t), this.cursor_y + (o.y - e));
                            n.set_select(!0),
                            n.add(this)
                        }
                        this.redraw()
                    }
                    ,
                    i.prototype.load_schematic = function(t, e) {
                        if (void 0 != t && -1 != t.indexOf("[") || (t = e),
                        t && -1 != t.indexOf("["))
                            for (var i = JSON.parse(t), o = i.length - 1; o >= 0; --o) {
                                var n = i[o];
                                if ("view" == n[0])
                                    this.ac_fstart = n[5],
                                    this.ac_fstop = n[6],
                                    this.ac_source_name = n[7],
                                    this.tran_npts = n[8],
                                    this.tran_tstop = n[9],
                                    this.dc_max_iters = n[10];
                                else if ("w" == n[0])
                                    this.add_wire(n[1][0], n[1][1], n[1][2], n[1][3]);
                                else if ("dc" == n[0])
                                    this.dc_results = n[1];
                                else if ("transient" == n[0])
                                    this.transient_results = n[1];
                                else if ("ac" == n[0])
                                    this.ac_results = n[1];
                                else {
                                    var s = n[0]
                                      , r = n[1]
                                      , a = n[2]
                                      , h = new _t[s][0](r[0],r[1],r[2]);
                                    for (var l in a)
                                        h.properties[l] = a[l];
                                    h.add(this)
                                }
                            }
                        this.redraw_background()
                    }
                    ,
                    i.prototype.label_connection_points = function() {
                        for (var t = this.components.length - 1; t >= 0; --t)
                            this.components[t].clear_labels();
                        for (var t = this.components.length - 1; t >= 0; --t)
                            this.components[t].add_default_labels();
                        this.next_label = 0;
                        for (var t = this.components.length - 1; t >= 0; --t)
                            this.components[t].label_connections()
                    }
                    ,
                    i.prototype.get_next_label = function() {
                        return this.next_label += 1,
                        this.next_label.toString()
                    }
                    ,
                    i.prototype.propagate_label = function(t, e) {
                        for (var i = this.connection_points[e], o = i.length - 1; o >= 0; --o)
                            i[o].propagate_label(t)
                    }
                    ,
                    i.prototype.update_value = function() {
                        this.label_connection_points(),
                        this.input.value = JSON.stringify(this.json_with_analyses())
                    }
                    ,
                    i.prototype.json = function() {
                        for (var t = [], e = this.components.length, i = 0; i < e; i++)
                            t.push(this.components[i].json(i));
                        return t.push(["view", this.origin_x, this.origin_y, this.scale, this.ac_npts, this.ac_fstart, this.ac_fstop, this.ac_source_name, this.tran_npts, this.tran_tstop, this.dc_max_iters]),
                        t
                    }
                    ,
                    i.prototype.json_with_analyses = function() {
                        var t = this.json();
                        return void 0 != this.dc_results && t.push(["dc", this.dc_results]),
                        void 0 != this.ac_results && t.push(["ac", this.ac_results]),
                        void 0 != this.transient_results && t.push(["transient", this.transient_results]),
                        t
                    }
                    ,
                    i.prototype.extract_circuit = function() {
                        this.label_connection_points();
                        var t = this.json();
                        this.input.value = JSON.stringify(t);
                        var e = new n.Circuit;
                        return e.load_netlist(t) ? e : null
                    }
                    ,
                    i.prototype.dc_analysis = function() {
                        this.unselect_all(-1),
                        this.redraw_background();
                        var t = this.extract_circuit();
                        if (null !== t && (this.operating_point = t.dc(),
                        void 0 != this.operating_point)) {
                            this.dc_results = {};
                            for (var e in this.operating_point)
                                this.dc_results[e] = this.operating_point[e];
                            this.redraw()
                        }
                    }
                    ,
                    i.prototype.find_probes = function() {
                        for (var t = [], t = [], e = this.components.length - 1; e >= 0; --e) {
                            var i = this.components[e];
                            void 0 != i.probe_info() && t.push(i.probe_info())
                        }
                        return t
                    }
                    ,
                    i.prototype.setup_ac_analysis = function() {
                        this.unselect_all(-1),
                        this.redraw_background();
                        if (0 == this.find_probes().length)
                            return void alert("AC Analysis: there are no voltage probes in the diagram!");
                        var t = [];
                        t["Starting frequency (Hz)"] = g("text", 10, this.ac_fstart),
                        t["Ending frequency (Hz)"] = g("text", 10, this.ac_fstop),
                        t["Name of V or I source for ac"] = g("text", 10, this.ac_source_name);
                        var e = m(t);
                        e.fields = t,
                        e.sch = this,
                        this.dialog("AC Analysis", e, function(t) {
                            var e = t.sch;
                            e.ac_fstart = t.fields["Starting frequency (Hz)"].value,
                            e.ac_fstop = t.fields["Ending frequency (Hz)"].value,
                            e.ac_source_name = t.fields["Name of V or I source for ac"].value,
                            e.ac_analysis(n.parse_number(e.ac_npts), n.parse_number(e.ac_fstart), n.parse_number(e.ac_fstop), e.ac_source_name)
                        })
                    }
                    ,
                    i.prototype.ac_analysis = function(t, e, i, s) {
                        var r = this.extract_circuit();
                        if (null !== r) {
                            var a = r.ac(t, e, i, s);
                            if ("string" == typeof a)
                                this.message(a);
                            else {
                                for (var h = a._frequencies_, l = h.length - 1; l >= 0; --l)
                                    h[l] = Math.log(h[l]) / Math.LN10;
                                if (void 0 != this.submit_analyses) {
                                    var c = this.submit_analyses.ac;
                                    if (void 0 != c) {
                                        this.ac_results = {};
                                        for (var p = 0; p < c.length; p++) {
                                            for (var d = c[p], u = d[0], f = a[u], _ = [], v = 1; v < d.length; v++) {
                                                var m = d[v]
                                                  , g = o(m, h, f);
                                                _.push([m, void 0 == g ? "undefined" : 20 * Math.log(g) / Math.LN10])
                                            }
                                            this.ac_results[u] = _
                                        }
                                    }
                                }
                                for (var y = [], b = [], w = this.find_probes(), x = [], A = [], l = w.length - 1; l >= 0; --l)
                                    if ("voltage" == w[l][3]) {
                                        A[l] = w[l][0];
                                        var M = w[l][1]
                                          , g = a[M];
                                        x[l] = L(g)
                                    }
                                var S = L(x);
                                if (S < 1e-16)
                                    alert("Zero ac response, -infinity on DB scale.");
                                else
                                    for (var l = w.length - 1; l >= 0; --l)
                                        if ("voltage" == w[l][3] && x[l] / S < 1e-10)
                                            return void alert("Near zero ac response, remove " + A[l] + " probe");
                                for (var l = w.length - 1; l >= 0; --l)
                                    if ("voltage" == w[l][3]) {
                                        for (var C = w[l][0], M = w[l][1], T = n.parse_number(w[l][2]), g = a[M], p = g.length - 1; p >= 0; --p)
                                            g[p] = 20 * Math.log(g[p] / 1) / Math.LN10;
                                        y.push([C, T, g]);
                                        var g = a[M + "_phase"];
                                        b.push([C, 0, g])
                                    }
                                var k = this.graph(h, "log(Frequency in Hz)", b, "degrees");
                                this.window("AC Analysis - Phase", k);
                                var E = this.graph(h, "log(Frequency in Hz)", y, "dB");
                                this.window("AC Analysis - Magnitude", E, 50)
                            }
                        }
                    }
                    ,
                    i.prototype.transient_analysis = function() {
                        this.unselect_all(-1),
                        this.redraw_background();
                        if (0 == this.find_probes().length)
                            return void alert("Transient Analysis: there are no probes in the diagram!");
                        var t = [];
                        t["Stop Time (seconds)"] = g("text", 10, this.tran_tstop);
                        var e = m(t);
                        e.fields = t,
                        e.sch = this,
                        this.dialog("Transient Analysis", e, function(t) {
                            var e = t.sch
                              , i = e.extract_circuit();
                            if (null !== i) {
                                e.tran_tstop = t.fields["Stop Time (seconds)"].value;
                                for (var s = e.find_probes(), r = new Array(s.length), a = s.length - 1; a >= 0; --a)
                                    r[a] = s[a][1];
                                var h = i.tran(i.parse_number(e.tran_npts), 0, i.parse_number(e.tran_tstop), r, !1);
                                if ("string" == typeof h)
                                    e.message(h);
                                else {
                                    if (void 0 != e.submit_analyses) {
                                        var l = e.submit_analyses.tran;
                                        if (void 0 != l) {
                                            e.transient_results = {};
                                            for (var c = h._time_, p = 0; p < l.length; p++) {
                                                for (var d = l[p], u = d[0], f = h[u], _ = [], v = 1; v < d.length; v++) {
                                                    var m = d[v]
                                                      , g = o(m, c, f);
                                                    _.push([m, void 0 == g ? "undefined" : g])
                                                }
                                                e.transient_results[u] = _
                                            }
                                        }
                                    }
                                    for (var y = h._time_, b = "Time", w = [], x = [], A = e.find_probes(), a = A.length - 1; a >= 0; --a) {
                                        var M = A[a][0]
                                          , S = A[a][1]
                                          , C = n.parse_number(A[a][2])
                                          , g = h[S];
                                        void 0 == g ? alert("The " + M + ' probe is connected to node "' + S + '" which is not an actual circuit node') : "voltage" == A[a][3] ? "x-axis" == M ? (y = g,
                                        b = "Voltage") : w.push([M, C, g]) : "x-axis" == M ? (y = g,
                                        b = "Current") : x.push([M, C, g])
                                    }
                                    var T = e.graph(y, b, w, "Voltage", x, "Current");
                                    e.window("Results of Transient Analysis", T)
                                }
                            }
                        })
                    }
                    ,
                    i.prototype.set_property = function(t, e, i) {
                        this.unselect_all(-1);
                        for (var o = this.components.length - 1; o >= 0; --o) {
                            var n = this.components[o];
                            if (n.properties.name == t) {
                                n.properties[e] = i.toString();
                                break
                            }
                        }
                        this.redraw_background()
                    }
                    ,
                    i.prototype.redraw_background = function() {
                        var t = this.bg_image.getContext("2d");
                        if (t.lineCap = "round",
                        t.fillStyle = dt,
                        t.fillRect(0, 0, this.width, this.height),
                        !this.diagram_only && this.show_grid) {
                            t.strokeStyle = ft;
                            for (var e = this.origin_x, i = e + this.width / this.scale, o = this.origin_y, n = o + this.height / this.scale, s = this.grid * Math.ceil(e / this.grid); s < i; s += this.grid)
                                this.draw_line(t, s, o, s, n, .1);
                            for (var s = this.grid * Math.ceil(o / this.grid); s < n; s += this.grid)
                                this.draw_line(t, e, s, i, s, .1)
                        }
                        for (var r = 1 / 0, a = -1 / 0, h = 1 / 0, l = -1 / 0, s = this.components.length - 1; s >= 0; --s) {
                            var c = this.components[s];
                            c.selected || (c.draw(t),
                            r = Math.min(c.bbox[0], r),
                            a = Math.max(c.bbox[2], a),
                            h = Math.min(c.bbox[1], h),
                            l = Math.max(c.bbox[3], l))
                        }
                        this.unsel_bbox = [r, h, a, l],
                        this.redraw()
                    }
                    ,
                    i.prototype.redraw = function() {
                        var t = this.canvas.getContext("2d");
                        t.drawImage(this.bg_image, 0, 0);
                        for (var e = this.unsel_bbox[0], i = this.unsel_bbox[2], o = this.unsel_bbox[1], n = this.unsel_bbox[3], s = !1, r = this.components.length - 1; r >= 0; --r) {
                            var a = this.components[r];
                            a.selected && (a.draw(t),
                            s = !0,
                            e = Math.min(a.bbox[0], e),
                            i = Math.max(a.bbox[2], i),
                            o = Math.min(a.bbox[1], o),
                            n = Math.max(a.bbox[3], n))
                        }
                        this.bbox = e == 1 / 0 ? [0, 0, 0, 0] : [e, o, i, n],
                        this.enable_tool("cut", s),
                        this.enable_tool("copy", s),
                        this.enable_tool("paste", sch_clipboard.length > 0);
                        for (var h in this.connection_points) {
                            var l = this.connection_points[h];
                            l[0].draw(t, l.length)
                        }
                        if (this.wire) {
                            var c = this.wire;
                            t.strokeStyle = "rgb(64,255,64)",
                            this.draw_line(t, c[0], c[1], c[2], c[3], 1)
                        }
                        if (this.select_rect) {
                            var c = this.select_rect;
                            t.lineWidth = 1,
                            t.strokeStyle = "rgb(64,255,64)",
                            t.beginPath(),
                            t.moveTo(c[0], c[1]),
                            t.lineTo(c[0], c[3]),
                            t.lineTo(c[2], c[3]),
                            t.lineTo(c[2], c[1]),
                            t.lineTo(c[0], c[1]),
                            t.stroke()
                        }
                        if (this.operating_point)
                            if ("string" == typeof this.operating_point)
                                this.message(this.operating_point);
                            else {
                                var p = [];
                                for (var r in this.operating_point)
                                    p[r] = this.operating_point[r];
                                for (var h in this.connection_points)
                                    this.connection_points[h][0].display_voltage(t, p);
                                for (var r = this.components.length - 1; r >= 0; --r)
                                    this.components[r].display_current(t, p)
                            }
                        if (!this.diagram_only) {
                            var c = this.sctl_r
                              , d = this.sctl_x
                              , u = this.sctl_y;
                            t.fillStyle = dt,
                            t.beginPath(),
                            t.arc(d, u, c, 0, 2 * Math.PI),
                            t.fill(),
                            t.strokeStyle = ft,
                            t.lineWidth = .5,
                            t.beginPath(),
                            t.arc(d, u, c, 0, 2 * Math.PI),
                            t.stroke(),
                            t.lineWidth = 3,
                            t.beginPath(),
                            t.moveTo(d + 4, u - c + 8),
                            t.lineTo(d, u - c + 4),
                            t.lineTo(d - 4, u - c + 8),
                            t.moveTo(d + c - 8, u + 4),
                            t.lineTo(d + c - 4, u),
                            t.lineTo(d + c - 8, u - 4),
                            t.moveTo(d + 4, u + c - 8),
                            t.lineTo(d, u + c - 4),
                            t.lineTo(d - 4, u + c - 8),
                            t.moveTo(d - c + 8, u + 4),
                            t.lineTo(d - c + 4, u),
                            t.lineTo(d - c + 8, u - 4),
                            t.stroke(),
                            d = this.zctl_left,
                            u = this.zctl_top,
                            t.lineWidth = .5,
                            t.fillStyle = dt,
                            t.fillRect(d, u, 16, 48),
                            t.strokeStyle = ft,
                            t.strokeRect(d, u, 16, 48),
                            t.lineWidth = 1,
                            t.beginPath(),
                            t.moveTo(d + 4, u + 8),
                            t.lineTo(d + 12, u + 8),
                            t.moveTo(d + 8, u + 4),
                            t.lineTo(d + 8, u + 12),
                            t.moveTo(d + 4, u + 24),
                            t.lineTo(d + 12, u + 24),
                            t.strokeRect(d + 4, u + 36, 8, 8),
                            t.stroke()
                        }
                    }
                    ,
                    i.prototype.cross_cursor = function(t, e, i) {
                        this.draw_line(t, e - this.grid, i, e + this.grid, i, 1),
                        this.draw_line(t, e, i - this.grid, e, i + this.grid, 1)
                    }
                    ,
                    i.prototype.moveTo = function(t, e, i) {
                        t.moveTo((e - this.origin_x) * this.scale, (i - this.origin_y) * this.scale)
                    }
                    ,
                    i.prototype.lineTo = function(t, e, i) {
                        t.lineTo((e - this.origin_x) * this.scale, (i - this.origin_y) * this.scale)
                    }
                    ,
                    i.prototype.draw_line = function(t, e, i, o, n, s) {
                        t.lineWidth = s * this.scale,
                        t.beginPath(),
                        t.moveTo((e - this.origin_x) * this.scale, (i - this.origin_y) * this.scale),
                        t.lineTo((o - this.origin_x) * this.scale, (n - this.origin_y) * this.scale),
                        t.stroke()
                    }
                    ,
                    i.prototype.draw_arc = function(t, e, i, o, n, s, r, a, h) {
                        t.lineWidth = a * this.scale,
                        t.beginPath(),
                        t.arc((e - this.origin_x) * this.scale, (i - this.origin_y) * this.scale, o * this.scale, n, s, r),
                        h ? t.fill() : t.stroke()
                    }
                    ,
                    i.prototype.draw_text = function(t, e, i, o, n) {
                        t.font = n * this.scale + "pt sans-serif",
                        t.fillText(e, (i - this.origin_x) * this.scale, (o - this.origin_y) * this.scale)
                    }
                    ;
                    try {
                        HTMLCanvasElement && (HTMLCanvasElement.prototype.relMouseCoords = function(t) {
                            var e = 0
                              , i = 0
                              , o = this;
                            do {
                                e += o.offsetLeft,
                                i += o.offsetTop
                            } while (o = o.offsetParent);
                            this.mouse_x = t.pageX - e,
                            this.mouse_y = t.pageY - i,
                            this.page_x = t.pageX,
                            this.page_y = t.pageY
                        }
                        )
                    } catch (t) {}
                    i.prototype.message = function(t) {
                        this.status.nodeValue = t
                    }
                    ,
                    i.prototype.append_message = function(t) {
                        this.status.nodeValue += " / " + t
                    }
                    ,
                    i.prototype.dialog = function(t, e, i) {
                        var o = document.createElement("div");
                        o.sch = this,
                        o.content = e,
                        o.callback = i;
                        for (var n = e.getElementsByClassName("property"), s = n.length - 1; s >= 0; --s) {
                            var r = n[s];
                            r.dialog = o,
                            r.addEventListener("keypress", v, !1)
                        }
                        var a = document.createElement("div");
                        e.style.marginBotton = "5px",
                        a.appendChild(e),
                        a.style.padding = "5px",
                        o.appendChild(a);
                        var h = document.createElement("span");
                        h.appendChild(document.createTextNode("OK")),
                        h.dialog = o,
                        h.addEventListener("click", _, !1),
                        h.style.display = "inline",
                        h.style.border = "1px solid",
                        h.style.padding = "5px",
                        h.style.margin = "10px";
                        var l = document.createElement("span");
                        l.appendChild(document.createTextNode("Cancel")),
                        l.dialog = o,
                        l.addEventListener("click", f, !1),
                        l.style.display = "inline",
                        l.style.border = "1px solid",
                        l.style.padding = "5px",
                        l.style.margin = "10px";
                        var c = document.createElement("div");
                        c.style.textAlign = "center",
                        c.appendChild(h),
                        c.appendChild(l),
                        c.style.padding = "5px",
                        c.style.margin = "10px",
                        o.appendChild(c),
                        this.window(t, o)
                    }
                    ,
                    i.prototype.window = function(t, e, i) {
                        var o = document.createElement("div");
                        o.sch = this,
                        o.content = e,
                        o.drag_x = void 0,
                        o.draw_y = void 0;
                        var n = document.createElement("div");
                        n.style.backgroundColor = "black",
                        n.style.color = "white",
                        n.style.textAlign = "center",
                        n.style.padding = "5px",
                        n.appendChild(document.createTextNode(t)),
                        n.win = o,
                        o.head = n;
                        var s = new Image;
                        s.src = Tt,
                        s.style.cssFloat = "right",
                        s.addEventListener("click", x, !1),
                        s.win = o,
                        n.appendChild(s),
                        o.appendChild(n),
                        n.addEventListener("mousedown", A, !1),
                        o.appendChild(e),
                        e.win = o,
                        void 0 == i && (i = 0),
                        o.left = this.canvas.mouse_x + i,
                        o.top = this.canvas.mouse_y + i,
                        o.style.background = "white",
                        o.style.position = "absolute",
                        o.style.left = o.left + "px",
                        o.style.top = o.top + "px",
                        o.style.border = "2px solid",
                        this.canvas.parentNode.insertBefore(o, this.canvas),
                        b(o, !0)
                    }
                    ,
                    i.prototype.add_tool = function(t, e, i) {
                        var o, n, s, r;
                        return o = document.createElement("button"),
                        n = document.createElement("img"),
                        s = document.createElement("span"),
                        r = document.createElement("span"),
                        o.style.backgroundImage = "none",
                        o.setAttribute("title", e),
                        s.innerHTML = e,
                        s.classList.add("sr"),
                        r.setAttribute("aria-hidden", "true"),
                        -1 != t.search("data:image") ? (n.setAttribute("src", t),
                        n.setAttribute("alt", ""),
                        o.appendChild(n)) : (o.style.font = "small-caps small sans-serif",
                        r.innerHTML = t,
                        o.appendChild(r),
                        o.appendChild(s)),
                        o.style.height = "32px",
                        o.style.width = "auto",
                        o.style.verticalAlign = "top",
                        o.addEventListener("mouseover", C, !1),
                        o.addEventListener("mouseout", T, !1),
                        o.addEventListener("click", k, !1),
                        o.sch = this,
                        o.tip = e,
                        o.callback = i,
                        this.toolbar.push(o),
                        o.enabled = !1,
                        o
                    }
                    ,
                    i.prototype.enable_tool = function(t, e) {
                        var i = this.tools[t];
                        void 0 != i && (i.removeAttribute("disabled"),
                        i.enabled = e,
                        e || (i.sch.message(""),
                        i.setAttribute("disabled", "true")))
                    }
                    ;
                    var Mt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH1QocFh0xaEFkXgAAArRJREFUOMuFk11Ik1EYx59z3nevr9vUfaXbbPgVaHjRVRB0YZRJV0XeZCIRaGmWWKhpgZAElaV9gYgQlBjoEPRKkCS6DAK1MG0zNvJj7zZ1m+51X+92zttNzmFa5+78/w8//s/znIMg5TzrfXIOAN7zPO9tunm7dI/Xz7LspTvNrbpUHadeGIYZu9XYrI1Go8t9/a87Uz0Fq7hw5nS55sWrnk8HAggh/E+HHdfV1lcQQo7t6E97HpeZc82m7ZCIKKUnDgRgjENLS7+AT0tDsVisdCcFy7JThYWF4HF7KKXU8a8EFTabDVZdK6iutr44kUic6nnePVBSUqJAgMHhdAAAWA8E3G299xljvLy4aAc+jUeSJB3X6/TXZAqwvrFGAWCiraXj4YEAAABKaeXCjwV5bc0DjTeaVPFEHIliEObm5iQA6Npb/xegraVjGmM8ZF+00WBwC2s0GhDcgizL8ru2lo7p/wL+pJianZnGTqcD0jkeMt8ORhBCb/arRXuFMaOxl1B6Pb65qSblZTIz+REVGHNAIHQLITRQ6fG07wsYM5k6437/g6MmEyQoRd6tTdkX3h5mZVRVkJ3D8BxHJVkG5/o6KLKyrla63UPJFsbN5hrJ5+sqNhrpwsrKVDASlgJBEdfEaU2UIzqWwTQQEhOO1dUPR/R6EvP5BsfN5t2XOmowCPNFRWSEYe4DAMxYLCGrUpnY8UcYhnzJNQcBAIYxbv+Wn09GDQZhd4ixmF6SJFJFyKMJleqlgmV5hLE9OWmOm1Hz6arJjIy+y5R2gyxTIMSwC+A4Qa1UMl/z8mImna5pXhC8iszMK8mPpNU2fHe5Ng4fOtQwa7HECKUYMA4AADAAANVarc/l95/0SxIbAJA5tfrsRUFI7twqiu7q7GyPNxDI8YfDGl8k4lOoVOetouj+DaDzOgfcNME8AAAAAElFTkSuQmCC"
                      , St = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAd0lEQVQ4y9WTsQ7AIAhE7wj//69dHKWLJqSlFOtUFpXA8SAIbBrHaR9yAAA6L2bvGiRvPtltQa+OqMrFPCo1jFhoRytBmXgqUCH5GUEkWCbova8TeBORfBNJVpYIrbVJdwDjY5hjJfk4vFnAzMDxiEqmo/fJAHACspMyA7UYnWgAAAAASUVORK5CYII="
                      , Ct = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAABZElEQVQ4y6WSMUsDMRiGn6RteoJSENS5oCdFR3+D0MHBciA4uujiVrq0o1NBcBEEFycXRzcnf4GDINTiL7BTr9LeJdfGoaX0ei21+MFHAsn7fG9eAjOqXCwoz/NKgAWs53mlcrGgZt0VE3s7fdhsfgHguttztTHA5+0ZjUaDzdM7HEeRy60C0G7/EASa78cLXNelcPkw1qYnkVprfN/n+6aEUgqlFFJKjDForclms2itYzZigH6/Tz6fp9PpAFC8fp3h/J2rw42P2ksLADkNMMbgOA6O4wzfZW2sAWovrb3janUn4cAYgzGGRWWtRQjRPKpUdmOAKIrGgCiK5gKEGGb/XK9/JhwEQUC32yUMw7nTJ0ExQK/Xw/d9BoPBeMqiigHCMEQIQSqV+pM4AbCAXEKcAGAtKSn/AYCE/UVZpIEVYA1ASkkmkxl/mqfzg5ExG1tP7t8AtoAOwDqwP4pgmd4H1n8B+QWeF/d+HLAAAAAASUVORK5CYII="
                      , Tt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACOUlEQVR42m2TzWtTQRTF30ysxE9E0VZKaapBa1OJxtRAW7XVGOrCKijFIEqXbgQFwf/BTReia7GUuBEUF5Y2YiMKKn6iKEqRom1DtAsjStGaGX9v3iQ+Y4Z35t6ZOfe8uXdmhFPVDqRSktYvpBzAxphaBQpKqSdalTLYO7fHxnWZL/zBfclkWAbksBBip7cmHEGvDd3raFlVUoOj2Wz+H4H9vT0RGQhMMLHGkxaienduuJV6p0ql5PjdiRlD2rurO0jwM9zWWnG1dPhyWql9ht3T1XmKwEtAaLNVMUT3AFyBsAz7g9lBbBc4+zcb54joTnQIKeRDZjrcvyNQxG9A5Bd2NwIZ+Gn8e2AxmHNFbTbXRWc8FoRcJLjObtDtbjB3DLtALZbws3l8d/0aOOzLZlYktkfX4eS9epuiehlqZ+TRi5cny8zEtuhVVo/7eabW8a2RFdivwlbPbu079uDT129yZYEd7W17oNzCXe4rdFHE2lrd0SRosbX5TXAK5EAd5NPYi9gF0AtGwSIrcN9IRTeFLxB8zp7RPAExMAUxAw7h3wRpdh+SQjzHBm0KZ4xA+8aWRgivzLU16TvuLZsB8UqyjvMYNDOu98rgfEQ8UklmS6hpQCs9ghuwdShfSKF9Ezb/n5x939upT7mKwOamRogqjchlhit9R+XbhGlfeGgn3k/Pjv33mNwWXl8f4sWdJ+Yow9W+JTetYSkDQ5P5wuear7HcNjSs5Upqd60ZLAXfwPSHwpyu5v4BhpTicEl0i9QAAAAASUVORK5CYII="
                      , kt = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QAAAAAAAD5Q7t/AAAACXBIWXMAAAsSAAALEgHS3X78AAAAMklEQVQ4y2NkYGD4z0ABYGFgYGD4/x/VDEZGRqLFmCixnYGBYRAYwMgwGoijgTgsAhEAq84fH/l+ELYAAAAASUVORK5CYII=";
                    try {
                        CanvasRenderingContext2D && (CanvasRenderingContext2D.prototype.dashedLineTo = function(t, e, i, o, n) {
                            var s = function(t, e) {
                                return t <= e
                            }
                              , r = function(t, e) {
                                return t >= e
                            }
                              , a = function(t, e) {
                                return Math.min(t, e)
                            }
                              , h = function(t, e) {
                                return Math.max(t, e)
                            }
                              , l = {
                                thereYet: r,
                                cap: a
                            }
                              , c = {
                                thereYet: r,
                                cap: a
                            };
                            e - o > 0 && (c.thereYet = s,
                            c.cap = h),
                            t - i > 0 && (l.thereYet = s,
                            l.cap = h),
                            this.moveTo(t, e);
                            for (var p = t, d = e, u = 0, f = !0; !l.thereYet(p, i) || !c.thereYet(d, o); ) {
                                var _ = Math.atan2(o - e, i - t)
                                  , v = n[u];
                                p = l.cap(i, p + Math.cos(_) * v),
                                d = c.cap(o, d + Math.sin(_) * v),
                                f ? this.lineTo(p, d) : this.moveTo(p, d),
                                u = (u + 1) % n.length,
                                f = !f
                            }
                        }
                        )
                    } catch (t) {}
                    var Et = [1, 2]
                      , Bt = [5, 5];
                    i.prototype.graph = function(t, e, i, o, n, s) {
                        function r(t) {
                            return (t - f) * m + a
                        }
                        var a = void 0 != i && i.length > 0 ? 55 : 25
                          , h = void 0 != n && n.length > 0 ? 55 : 25
                          , l = 400 + a + h
                          , c = 370
                          , p = document.createElement("canvas");
                        p.width = l,
                        p.height = c;
                        var d = document.createElement("canvas");
                        d.width = l,
                        d.height = c,
                        p.bg_image = d;
                        var u = d.getContext("2d");
                        u.fillStyle = pt,
                        u.fillRect(0, 0, l, c),
                        u.fillStyle = dt,
                        u.fillRect(a, 25, 400, 300);
                        var f = N(t)
                          , _ = L(t)
                          , v = E(f, _);
                        f = v[0],
                        _ = v[1];
                        var m = 400 / (_ - f);
                        u.strokeStyle = ft,
                        u.lineWidth = 1,
                        u.fillStyle = ut,
                        u.font = "10pt sans-serif",
                        u.textAlign = "center",
                        u.textBaseline = "top";
                        for (var g = f; g <= _; g += v[2]) {
                            var y = r(g) + .5;
                            u.beginPath(),
                            g == f ? (u.moveTo(y, 25),
                            u.lineTo(y, 325)) : u.dashedLineTo(y, 25, y, 325, Et),
                            u.stroke(),
                            u.beginPath(),
                            u.moveTo(y, 325),
                            u.lineTo(y, 330),
                            u.stroke(),
                            u.fillText(B(g, 2), y, 330)
                        }
                        if (void 0 != i && i.length > 0) {
                            var b, w = function(t) {
                                return (A - t) * T + 25
                            }, x = 1 / 0, A = -1 / 0;
                            for (b = i.length - 1; b >= 0; --b) {
                                var M = i[b][2];
                                if (void 0 != M) {
                                    var S = i[b][1]
                                      , y = N(M) + S;
                                    y < x && (x = y),
                                    y = L(M) + S,
                                    y > A && (A = y)
                                }
                            }
                            var C = E(x, A);
                            x = C[0],
                            A = C[1];
                            var T = 300 / (A - x);
                            u.textAlign = "right",
                            u.textBaseline = "middle";
                            for (var k = x; k <= A; k += C[2]) {
                                Math.abs(k / A) < .001 && (k = 0);
                                var y = w(k) + .5;
                                u.beginPath(),
                                k == x ? (u.moveTo(a, y),
                                u.lineTo(a + 400, y)) : u.dashedLineTo(a, y, a + 400, y, Et),
                                u.stroke(),
                                u.beginPath(),
                                u.moveTo(a - 5, y),
                                u.lineTo(a, y),
                                u.stroke(),
                                u.fillText(B(k, 2), a - 5 - 2, y)
                            }
                            var g, k, P, z;
                            for (u.lineWidth = 3,
                            u.lineCap = "round",
                            b = i.length - 1; b >= 0; --b) {
                                var G = Gt[i[b][0]];
                                if (void 0 != G) {
                                    u.strokeStyle = G;
                                    var M = i[b][2];
                                    if (void 0 != M) {
                                        var S = i[b][1];
                                        g = r(t[0]),
                                        k = w(M[0] + S),
                                        u.beginPath(),
                                        u.moveTo(g, k);
                                        for (var R = 1; R < t.length; R++)
                                            P = r(t[R]),
                                            z = w(M[R] + S),
                                            u.lineTo(P, z),
                                            g = P,
                                            k = z,
                                            R % 100 == 99 && (u.stroke(),
                                            u.beginPath(),
                                            u.moveTo(g, k));
                                        u.stroke()
                                    }
                                }
                            }
                        }
                        if (void 0 != n && n.length > 0) {
                            var H = function(t) {
                                return (j - t) * F + 25
                            }
                              , W = 1 / 0
                              , j = -1 / 0;
                            for (b = n.length - 1; b >= 0; --b) {
                                var M = n[b][2];
                                if (void 0 != M) {
                                    var S = n[b][1]
                                      , y = N(M) + S;
                                    y < W && (W = y),
                                    y = L(M) + S,
                                    y > j && (j = y)
                                }
                            }
                            var U = E(W, j);
                            W = U[0],
                            j = U[1];
                            var F = 300 / (j - W);
                            u.textAlign = "left",
                            u.textBaseline = "middle",
                            u.lineWidth = 1,
                            u.strokeStyle = ut;
                            for (var D = Math.floor(2.5), J = 5 - D, O = W; O <= j; O += U[2]) {
                                Math.abs(O / j) < .001 && (O = 0);
                                var y = H(O) + .5;
                                u.beginPath(),
                                u.moveTo(a + 400 - D, y),
                                u.lineTo(a + 400 + J, y),
                                u.stroke(),
                                u.fillText(B(O, 2), a + 400 + 5 + 2, y)
                            }
                            var O, K;
                            for (u.lineWidth = 3,
                            b = n.length - 1; b >= 0; --b) {
                                var G = Gt[n[b][0]];
                                if (void 0 != G) {
                                    u.strokeStyle = G;
                                    var M = n[b][2];
                                    if (void 0 != M) {
                                        var S = n[b][1];
                                        g = r(t[0]),
                                        O = H(M[0] + S),
                                        u.beginPath(),
                                        u.moveTo(g, O);
                                        for (var R = 1; R < t.length; R++)
                                            P = r(t[R]),
                                            K = H(M[R] + S),
                                            u.lineTo(P, K),
                                            g = P,
                                            O = K,
                                            R % 100 == 99 && (u.stroke(),
                                            u.beginPath(),
                                            u.moveTo(g, O));
                                        u.stroke()
                                    }
                                }
                            }
                        }
                        return u.font = "12pt sans-serif",
                        u.textAlign = "center",
                        u.textBaseline = "bottom",
                        u.fillText(e, a + 200, 365),
                        void 0 != i && i.length > 0 && (u.textBaseline = "top",
                        u.save(),
                        u.translate(5, 175),
                        u.rotate(-Math.PI / 2),
                        u.fillText(o, 0, 0),
                        u.restore()),
                        void 0 != n && n.length > 0 && (u.textBaseline = "bottom",
                        u.save(),
                        u.translate(l - 5, 175),
                        u.rotate(-Math.PI / 2),
                        u.fillText(s, 0, 0),
                        u.restore()),
                        p.x_values = t,
                        p.y_values = i,
                        p.z_values = n,
                        p.x_legend = e,
                        p.y_legend = o,
                        p.z_legend = o,
                        p.x_min = f,
                        p.x_scale = m,
                        p.y_min = x,
                        p.y_scale = T,
                        p.z_min = W,
                        p.z_scale = F,
                        p.left_margin = a,
                        p.top_margin = 25,
                        p.pwidth = 400,
                        p.pheight = 300,
                        p.tick_length = 5,
                        p.cursor1_x = void 0,
                        p.cursor2_x = void 0,
                        p.sch = this,
                        p.addEventListener("mousemove", I, !1),
                        q(p),
                        p
                    }
                    ,
                    z.prototype.set_location = function(t, e) {
                        this.canvas.style.left = t + "px",
                        this.canvas.style.top = e + "px"
                    }
                    ,
                    z.prototype.right = function() {
                        return this.canvas.offsetLeft + this.canvas.offsetWidth
                    }
                    ,
                    z.prototype.bottom = function() {
                        return this.canvas.offsetTop + this.canvas.offsetHeight
                    }
                    ,
                    z.prototype.set_component = function(t, e) {
                        t.sch = this,
                        this.component = t,
                        this.tip = e;
                        var i = t.bounding_box
                          , o = i[2] - i[0]
                          , n = i[3] - i[1];
                        this.scale = .8,
                        this.origin_x = i[0] + o / 2 - vt / (2 * this.scale),
                        this.origin_y = i[1] + n / 2 - mt / (2 * this.scale),
                        this.redraw()
                    }
                    ,
                    z.prototype.redraw = function(t) {
                        var e = this.canvas.getContext("2d");
                        e.fillStyle = this.selected ? "rgb(64,255,64)" : pt,
                        e.fillRect(0, 0, vt, mt),
                        this.component && this.component.draw(e)
                    }
                    ,
                    z.prototype.select = function(t) {
                        this.selected = t,
                        this.redraw()
                    }
                    ,
                    z.prototype.update_connection_point = function(t, e) {}
                    ,
                    z.prototype.moveTo = function(t, e, i) {
                        t.moveTo((e - this.origin_x) * this.scale, (i - this.origin_y) * this.scale)
                    }
                    ,
                    z.prototype.lineTo = function(t, e, i) {
                        t.lineTo((e - this.origin_x) * this.scale, (i - this.origin_y) * this.scale)
                    }
                    ,
                    z.prototype.draw_line = function(t, e, i, o, n, s) {
                        t.lineWidth = s * this.scale,
                        t.beginPath(),
                        t.moveTo((e - this.origin_x) * this.scale, (i - this.origin_y) * this.scale),
                        t.lineTo((o - this.origin_x) * this.scale, (n - this.origin_y) * this.scale),
                        t.stroke()
                    }
                    ,
                    z.prototype.draw_arc = function(t, e, i, o, n, s, r, a, h) {
                        t.lineWidth = a * this.scale,
                        t.beginPath(),
                        t.arc((e - this.origin_x) * this.scale, (i - this.origin_y) * this.scale, o * this.scale, n, s, r),
                        h ? t.fill() : t.stroke()
                    }
                    ,
                    z.prototype.draw_text = function(t, e, i, o, n) {}
                    ,
                    J.prototype.json = function(t) {
                        this.properties._json_ = t;
                        var e = {};
                        for (var i in this.properties)
                            e[i] = this.properties[i];
                        for (var o = [], n = 0; n < this.connections.length; n++)
                            o.push(this.connections[n].json());
                        return [this.type, [this.x, this.y, this.rotation], e, o]
                    }
                    ,
                    J.prototype.add_connection = function(t, e) {
                        this.connections.push(new O(this,t,e))
                    }
                    ,
                    J.prototype.update_coords = function() {
                        var t = this.x
                          , e = this.y
                          , i = this.bounding_box;
                        this.bbox[0] = this.transform_x(i[0], i[1]) + t,
                        this.bbox[1] = this.transform_y(i[0], i[1]) + e,
                        this.bbox[2] = this.transform_x(i[2], i[3]) + t,
                        this.bbox[3] = this.transform_y(i[2], i[3]) + e,
                        j(this.bbox);
                        for (var o = this.connections.length - 1; o >= 0; --o)
                            this.connections[o].update_location()
                    }
                    ,
                    J.prototype.rotate = function(t) {
                        this.rotation;
                        this.rotation = (this.rotation + t) % 8,
                        this.update_coords()
                    }
                    ,
                    J.prototype.move_begin = function() {
                        this.move_x = this.x,
                        this.move_y = this.y
                    }
                    ,
                    J.prototype.move = function(t, e) {
                        this.x += t,
                        this.y += e,
                        this.update_coords()
                    }
                    ,
                    J.prototype.move_end = function() {
                        var t = this.x - this.move_x
                          , e = this.y - this.move_y;
                        0 == t && 0 == e || this.sch.check_wires(this)
                    }
                    ,
                    J.prototype.add = function(t) {
                        this.sch = t,
                        t.add_component(this),
                        this.update_coords()
                    }
                    ,
                    J.prototype.remove = function() {
                        for (var t = this.connections.length - 1; t >= 0; --t) {
                            var e = this.connections[t];
                            this.sch.remove_connection_point(e, e.location)
                        }
                        this.sch.remove_component(this),
                        this.sch = void 0
                    }
                    ,
                    J.prototype.transform_x = function(t, e) {
                        var i = this.rotation;
                        return 0 == i || 6 == i ? t : 1 == i || 5 == i ? -e : 2 == i || 4 == i ? -t : e
                    }
                    ,
                    J.prototype.transform_y = function(t, e) {
                        var i = this.rotation;
                        return 1 == i || 7 == i ? t : 2 == i || 6 == i ? -e : 3 == i || 5 == i ? -t : e
                    }
                    ,
                    J.prototype.moveTo = function(t, e, i) {
                        var o = this.transform_x(e, i) + this.x
                          , n = this.transform_y(e, i) + this.y;
                        this.sch.moveTo(t, o, n)
                    }
                    ,
                    J.prototype.lineTo = function(t, e, i) {
                        var o = this.transform_x(e, i) + this.x
                          , n = this.transform_y(e, i) + this.y;
                        this.sch.lineTo(t, o, n)
                    }
                    ,
                    J.prototype.draw_line = function(t, e, i, o, n) {
                        t.strokeStyle = this.selected ? "rgb(64,255,64)" : "w" == this.type ? ut : "rgb(64,64,255)";
                        var s = this.transform_x(e, i) + this.x
                          , r = this.transform_y(e, i) + this.y
                          , a = this.transform_x(o, n) + this.x
                          , h = this.transform_y(o, n) + this.y;
                        this.sch.draw_line(t, s, r, a, h, 1)
                    }
                    ,
                    J.prototype.draw_circle = function(t, e, i, o, n) {
                        n ? t.fillStyle = this.selected ? "rgb(64,255,64)" : ut : t.strokeStyle = this.selected ? "rgb(64,255,64)" : "w" == this.type ? ut : "rgb(64,64,255)";
                        var s = this.transform_x(e, i) + this.x
                          , r = this.transform_y(e, i) + this.y;
                        this.sch.draw_arc(t, s, r, o, 0, 2 * Math.PI, !1, 1, n)
                    }
                    ;
                    var Lt = [0, Math.PI / 2, Math.PI, 3 * Math.PI / 2, 0, Math.PI / 2, Math.PI, 3 * Math.PI / 2];
                    J.prototype.draw_arc = function(t, e, i, o, n, s) {
                        t.strokeStyle = this.selected ? "rgb(64,255,64)" : "w" == this.type ? ut : "rgb(64,64,255)";
                        var r = this.transform_x(e, i) + this.x
                          , a = this.transform_y(e, i) + this.y;
                        this.sch.draw_arc(t, r, a, o, n + Lt[this.rotation], s + Lt[this.rotation], !1, 1, !1)
                    }
                    ,
                    J.prototype.draw = function(t) {}
                    ;
                    var Nt = [0, 1, 2, 3, 4, 5, 6, 7, 8, 2, 5, 8, 1, 4, 7, 0, 3, 6, 8, 7, 6, 5, 4, 3, 2, 1, 0, 6, 3, 0, 7, 4, 1, 8, 5, 3, 2, 1, 0, 5, 4, 3, 8, 7, 6, 8, 5, 2, 7, 4, 1, 6, 3, 0, 6, 7, 8, 3, 4, 5, 0, 1, 2, 0, 3, 6, 1, 4, 7, 2, 5, 8]
                      , Pt = ["left", "center", "right", "left", "center", "right", "left", "center", "right"]
                      , qt = ["top", "top", "top", "middle", "middle", "middle", "bottom", "bottom", "bottom"];
                    J.prototype.draw_text = function(t, e, i, o, n, s, r) {
                        var a = Nt[9 * this.rotation + n];
                        t.textAlign = Pt[a],
                        t.textBaseline = qt[a],
                        t.fillStyle = void 0 == r ? this.selected ? "rgb(64,255,64)" : ut : r,
                        this.sch.draw_text(t, e, this.transform_x(i, o) + this.x, this.transform_y(i, o) + this.y, s)
                    }
                    ,
                    J.prototype.set_select = function(t) {
                        t != this.selected && (this.selected = t)
                    }
                    ,
                    J.prototype.select = function(t, e, i) {
                        return this.was_previously_selected = this.selected,
                        !!this.near(t, e) && (this.set_select(!i || !this.selected),
                        !0)
                    }
                    ,
                    J.prototype.select_rect = function(t) {
                        this.was_previously_selected = this.selected,
                        D(this.bbox, t) && this.set_select(!0)
                    }
                    ,
                    J.prototype.bisect = function(t) {
                        return null
                    }
                    ,
                    J.prototype.near = function(t, e) {
                        return F(this.bbox, t, e)
                    }
                    ,
                    J.prototype.edit_properties = function(t, e) {
                        if (this.near(t, e)) {
                            var i = [];
                            for (var o in this.properties)
                                "_" != o.charAt(0) && (i[o] = g("text", 10, this.properties[o]));
                            var n = m(i);
                            return n.fields = i,
                            n.component = this,
                            this.sch.dialog("Edit Properties", n, function(t) {
                                for (var e in t.fields)
                                    t.component.properties[e] = t.fields[e].value;
                                t.component.sch.redraw_background()
                            }),
                            !0
                        }
                        return !1
                    }
                    ,
                    J.prototype.clear_labels = function() {
                        for (var t = this.connections.length - 1; t >= 0; --t)
                            this.connections[t].clear_label()
                    }
                    ,
                    J.prototype.propagate_label = function(t) {}
                    ,
                    J.prototype.add_default_labels = function() {}
                    ,
                    J.prototype.label_connections = function() {
                        for (var t = this.connections.length - 1; t >= 0; --t) {
                            var e = this.connections[t];
                            e.label || e.propagate_label(this.sch.get_next_label())
                        }
                    }
                    ,
                    J.prototype.probe_info = function() {}
                    ,
                    J.prototype.display_current = function(t, e) {}
                    ;
                    O.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<ConnectionPoint ({offset_x},{offset_y}) {parent}>", {
                            offset_x: this.offset_x,
                            offset_y: this.offset_y,
                            parent: e.ensureHTML(this.parent.toString())
                        })
                    }
                    ,
                    O.prototype.json = function() {
                        return this.label
                    }
                    ,
                    O.prototype.clear_label = function() {
                        this.label = void 0
                    }
                    ,
                    O.prototype.propagate_label = function(t) {
                        void 0 === this.label ? (this.label = t,
                        this.parent.sch.propagate_label(t, this.location),
                        this.parent.propagate_label(t)) : "0" != this.label && "0" != t && this.label != t && alert("Node has two conflicting labels: " + this.label + ", " + t)
                    }
                    ,
                    O.prototype.update_location = function() {
                        var t = this.location
                          , e = this.parent
                          , i = e.transform_x(this.offset_x, this.offset_y) + e.x
                          , o = e.transform_y(this.offset_x, this.offset_y) + e.y;
                        this.x = i,
                        this.y = o,
                        this.location = i + "," + o,
                        e.sch && e.sch.update_connection_point(this, t)
                    }
                    ,
                    O.prototype.coincident = function(t, e) {
                        return this.x == t && this.y == e
                    }
                    ,
                    O.prototype.draw = function(t, e) {
                        2 != e && this.parent.draw_circle(t, this.offset_x, this.offset_y, 2, e > 2)
                    }
                    ,
                    O.prototype.draw_x = function(t) {
                        this.parent.draw_line(t, this.offset_x - 2, this.offset_y - 2, this.offset_x + 2, this.offset_y + 2, ft),
                        this.parent.draw_line(t, this.offset_x + 2, this.offset_y - 2, this.offset_x - 2, this.offset_y + 2, ft)
                    }
                    ,
                    O.prototype.display_voltage = function(t, e) {
                        var i = e[this.label];
                        if (void 0 != i) {
                            var o = i.toFixed(2) + "V";
                            t.globalAlpha = .85,
                            this.parent.draw_text(t, "███", this.offset_x, this.offset_y, 4, 6, dt),
                            t.globalAlpha = 1,
                            this.parent.draw_text(t, o, this.offset_x, this.offset_y, 4, 6, "rgb(255,64,64)"),
                            delete e[this.label]
                        }
                    }
                    ;
                    var It = 2;
                    Y.prototype = new J,
                    Y.prototype.constructor = Y,
                    Y.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<Wire ({x},{y}) ({x_plus_dx},{y_plus_dy})>", {
                            x: this.x,
                            y: this.y,
                            x_plus_dx: this.x + this.dx,
                            y_plus_dy: this.y + this.dy
                        })
                    }
                    ,
                    Y.prototype.other_end = function(t) {
                        return t == this.connections[0] ? this.connections[1] : t == this.connections[1] ? this.connections[0] : void 0
                    }
                    ,
                    Y.prototype.json = function(t) {
                        return ["w", [this.x, this.y, this.x + this.dx, this.y + this.dy]]
                    }
                    ,
                    Y.prototype.draw = function(t) {
                        this.draw_line(t, 0, 0, this.dx, this.dy)
                    }
                    ,
                    Y.prototype.clone = function(t, e) {
                        return new Y(t,e,t + this.dx,e + this.dy)
                    }
                    ,
                    Y.prototype.near = function(t, e) {
                        if (F(this.bbox, t, e)) {
                            if (Math.abs((t - this.x) * this.dy - (e - this.y) * this.dx) / this.len <= It)
                                return !0
                        }
                        return !1
                    }
                    ,
                    Y.prototype.select_rect = function(t) {
                        this.was_previously_selected = this.selected,
                        (F(t, this.x, this.y) || F(t, this.x + this.dx, this.y + this.dy)) && this.set_select(!0)
                    }
                    ,
                    Y.prototype.bisect_cp = function(t) {
                        var e = t.x
                          , i = t.y;
                        if (F(this.bbox, e, i)) {
                            if (Math.abs((e - this.x) * this.dy - (i - this.y) * this.dx) / this.len < 1 && !this.connections[0].coincident(e, i) && !this.connections[1].coincident(e, i))
                                return !0
                        }
                        return !1
                    }
                    ,
                    Y.prototype.bisect = function(t) {
                        if (void 0 != t) {
                            for (var e = t.connections.length - 1; e >= 0; --e) {
                                var i = t.connections[e];
                                if (this.bisect_cp(i))
                                    return i
                            }
                            return null
                        }
                    }
                    ,
                    Y.prototype.move_end = function() {
                        this.sch.check_wires(this),
                        this.sch.check_connection_points(this)
                    }
                    ,
                    Y.prototype.propagate_label = function(t) {
                        this.connections[0].propagate_label(t),
                        this.connections[1].propagate_label(t)
                    }
                    ,
                    Y.prototype.edit_properties = function(t, e) {
                        return !1
                    }
                    ,
                    Y.prototype.label_connections = function() {}
                    ,
                    Q.prototype = new J,
                    Q.prototype.constructor = Q,
                    Q.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<Ground ({x},{y})>", {
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    Q.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 0, 0, 0, 8),
                        this.draw_line(t, -6, 8, 6, 8)
                    }
                    ,
                    Q.prototype.clone = function(t, e) {
                        return new Q(t,e,this.rotation)
                    }
                    ,
                    Q.prototype.edit_properties = function(t, e) {
                        return !1
                    }
                    ,
                    Q.prototype.add_default_labels = function() {
                        this.connections[0].propagate_label("0")
                    }
                    ,
                    V.prototype = new J,
                    V.prototype.constructor = V,
                    V.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<Label ({x},{y})>", {
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    V.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 0, 0, 0, 8),
                        this.draw_text(t, this.properties.label, 0, 9, 1, 5)
                    }
                    ,
                    V.prototype.clone = function(t, e) {
                        return new V(t,e,this.rotation,this.properties.label)
                    }
                    ,
                    V.prototype.add_default_labels = function() {
                        this.connections[0].propagate_label(this.properties.label)
                    }
                    ;
                    var zt = ["red", "green", "blue", "cyan", "magenta", "yellow", "black", "x-axis"]
                      , Gt = {
                        red: "rgb(255,64,64)",
                        green: "rgb(64,255,64)",
                        blue: "rgb(64,64,255)",
                        cyan: "rgb(64,255,255)",
                        magenta: "rgb(255,64,255)",
                        yellow: "rgb(255,255,64)",
                        black: "rgb(0,0,0)",
                        "x-axis": void 0
                    };
                    X.prototype = new J,
                    X.prototype.constructor = X,
                    X.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<Probe ({x},{y})>", {
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    X.prototype.draw = function(t) {
                        this.draw_line(t, 0, 0, 4, -4),
                        this.draw_line(t, 2, -6, 6, -2),
                        this.draw_line(t, 2, -6, 17, -21),
                        this.draw_line(t, 6, -2, 21, -17),
                        this.draw_line(t, 17, -21, 21, -17),
                        this.draw_arc(t, 19, -11, 8, 3 * Math.PI / 2, 0);
                        var e = Gt[this.properties.color];
                        void 0 != e ? (t.fillStyle = e,
                        t.beginPath(),
                        this.moveTo(t, 2, -6),
                        this.lineTo(t, 6, -2),
                        this.lineTo(t, 21, -17),
                        this.lineTo(t, 17, -21),
                        this.lineTo(t, 2, -6),
                        t.fill()) : this.draw_text(t, this.properties.color, 27, -11, 1, 5)
                    }
                    ,
                    X.prototype.clone = function(t, e) {
                        return new X(t,e,this.rotation,this.properties.color,this.properties.offset)
                    }
                    ,
                    X.prototype.edit_properties = function(t, e) {
                        if (F(this.bbox, t, e)) {
                            var i = [];
                            i["Plot color"] = y(zt, this.properties.color),
                            i["Plot offset"] = g("text", 10, this.properties.offset);
                            var o = m(i);
                            return o.fields = i,
                            o.component = this,
                            this.sch.dialog("Edit Properties", o, function(t) {
                                var e = t.fields["Plot color"];
                                t.component.properties.color = zt[e.selectedIndex],
                                t.component.properties.offset = t.fields["Plot offset"].value,
                                t.component.sch.redraw_background()
                            }),
                            !0
                        }
                        return !1
                    }
                    ,
                    X.prototype.probe_info = function() {
                        var t = this.properties.color
                          , e = this.properties.offset;
                        return void 0 != e && "" != e || (e = "0"),
                        [t, this.connections[0].label, e, "voltage"]
                    }
                    ,
                    Z.prototype = new J,
                    Z.prototype.constructor = Z,
                    Z.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<Ammeter ({x},{y})>", {
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    Z.prototype.move_end = function() {
                        J.prototype.move_end.call(this);
                        for (var t = this.connections[0].location, e = this.connections[1].location, i = this.sch.find_connections(this.connections[0]), o = i.length - 1; o >= 0; --o) {
                            var n = i[o].parent;
                            if ("w" == n.type) {
                                var s = n.connections[0].location
                                  , r = n.connections[1].location;
                                if (t == s && c2 == r || t == r && e == s) {
                                    n.remove();
                                    break
                                }
                            }
                        }
                    }
                    ,
                    Z.prototype.draw = function(t) {
                        this.draw_line(t, 0, 0, 16, 0),
                        t.strokeStyle = Gt[this.properties.color],
                        void 0 != t.strokeStyle && (t.beginPath(),
                        this.moveTo(t, 6, -3),
                        this.lineTo(t, 10, 0),
                        this.lineTo(t, 6, 3),
                        t.stroke())
                    }
                    ,
                    Z.prototype.clone = function(t, e) {
                        return new Z(t,e,this.rotation,this.properties.color,this.properties.offset)
                    }
                    ,
                    Z.prototype.edit_properties = X.prototype.edit_properties,
                    Z.prototype.label = function() {
                        var t = this.properties.name;
                        return "I(" + (t || "_" + this.properties._json_) + ")"
                    }
                    ,
                    Z.prototype.display_current = function(t, e) {
                        var i = this.label()
                          , o = e[i];
                        if (void 0 != o) {
                            var n = B(o, 2) + "A";
                            this.draw_text(t, n, 8, -5, 7, 6, "rgb(255,64,64)"),
                            delete e[i]
                        }
                    }
                    ,
                    Z.prototype.probe_info = function() {
                        var t = this.properties.color
                          , e = this.properties.offset;
                        return void 0 != e && "" != e || (e = "0"),
                        [t, this.label(), e, "current"]
                    }
                    ,
                    $.prototype = new J,
                    $.prototype.constructor = $,
                    $.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<Resistor {r} ({x},{y})>", {
                            r: this.properties.r,
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    $.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 0, 0, 0, 12),
                        this.draw_line(t, 0, 12, 4, 14),
                        this.draw_line(t, 4, 14, -4, 18),
                        this.draw_line(t, -4, 18, 4, 22),
                        this.draw_line(t, 4, 22, -4, 26),
                        this.draw_line(t, -4, 26, 4, 30),
                        this.draw_line(t, 4, 30, -4, 34),
                        this.draw_line(t, -4, 34, 0, 36),
                        this.draw_line(t, 0, 36, 0, 48),
                        this.properties.r && this.draw_text(t, this.properties.r + "Ω", 5, 24, 3, 5),
                        this.properties.name && this.draw_text(t, this.properties.name, -5, 24, 5, 5)
                    }
                    ,
                    $.prototype.clone = function(t, e) {
                        return new $(t,e,this.rotation,this.properties.name,this.properties.r)
                    }
                    ,
                    tt.prototype = new J,
                    tt.prototype.constructor = tt,
                    tt.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<Capacitor {r} ({x},{y})>", {
                            r: this.properties.r,
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    tt.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 0, 0, 0, 22),
                        this.draw_line(t, -8, 22, 8, 22),
                        this.draw_line(t, -8, 26, 8, 26),
                        this.draw_line(t, 0, 26, 0, 48),
                        this.properties.c && this.draw_text(t, this.properties.c + "F", 9, 24, 3, 5),
                        this.properties.name && this.draw_text(t, this.properties.name, -9, 24, 5, 5)
                    }
                    ,
                    tt.prototype.clone = function(t, e) {
                        return new tt(t,e,this.rotation,this.properties.name,this.properties.c)
                    }
                    ,
                    et.prototype = new J,
                    et.prototype.constructor = et,
                    et.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<Inductor {l}, ({x},{y})>", {
                            l: this.properties.l,
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    et.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 0, 0, 0, 14),
                        this.draw_arc(t, 0, 18, 4, 6 * Math.PI / 4, 3 * Math.PI / 4),
                        this.draw_arc(t, 0, 24, 4, 5 * Math.PI / 4, 3 * Math.PI / 4),
                        this.draw_arc(t, 0, 30, 4, 5 * Math.PI / 4, 2 * Math.PI / 4),
                        this.draw_line(t, 0, 34, 0, 48),
                        this.properties.l && this.draw_text(t, this.properties.l + "H", 6, 24, 3, 5),
                        this.properties.name && this.draw_text(t, this.properties.name, -3, 24, 5, 5)
                    }
                    ,
                    et.prototype.clone = function(t, e) {
                        return new et(t,e,this.rotation,this.properties.name,this.properties.l)
                    }
                    ;
                    var Rt = ["normal", "ideal"];
                    it.prototype = new J,
                    it.prototype.constructor = it,
                    it.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<Diode {area} ({x},{y})>", {
                            area: this.properties.area,
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    it.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 0, 0, 0, 16),
                        this.draw_line(t, -8, 16, 8, 16),
                        this.draw_line(t, -8, 16, 0, 32),
                        this.draw_line(t, 8, 16, 0, 32),
                        this.draw_line(t, -8, 32, 8, 32),
                        this.draw_line(t, 0, 32, 0, 48),
                        "ideal" == this.properties.type && (this.draw_line(t, -10, 12, 10, 12),
                        this.draw_line(t, -10, 12, -10, 36),
                        this.draw_line(t, 10, 12, 10, 36),
                        this.draw_line(t, -10, 36, 10, 36)),
                        this.properties.area && this.draw_text(t, this.properties.area, 10, 24, 3, 5),
                        this.properties.name && this.draw_text(t, this.properties.name, -10, 24, 5, 5)
                    }
                    ,
                    it.prototype.clone = function(t, e) {
                        return new it(t,e,this.rotation,this.properties.name,this.properties.area,this.properties.type)
                    }
                    ,
                    it.prototype.edit_properties = function(t, e) {
                        if (F(this.bbox, t, e)) {
                            var i = [];
                            i.name = g("text", 10, this.properties.name),
                            i.area = g("text", 10, this.properties.area),
                            i.type = y(Rt, this.properties.type);
                            var o = m(i);
                            return o.fields = i,
                            o.component = this,
                            this.sch.dialog("Edit Properties", o, function(t) {
                                t.component.properties.name = t.fields.name.value,
                                t.component.properties.area = t.fields.area.value,
                                t.component.properties.type = Rt[t.fields.type.selectedIndex],
                                t.component.sch.redraw_background()
                            }),
                            !0
                        }
                        return !1
                    }
                    ,
                    ot.prototype = new J,
                    ot.prototype.constructor = ot,
                    ot.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<NFet {W_L} ({x},{y})>", {
                            W_L: this.properties["W/L"],
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    ot.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 0, 0, 0, 16),
                        this.draw_line(t, -8, 16, 0, 16),
                        this.draw_line(t, -8, 16, -8, 32),
                        this.draw_line(t, -8, 32, 0, 32),
                        this.draw_line(t, 0, 32, 0, 48),
                        this.draw_line(t, -24, 24, -12, 24),
                        this.draw_line(t, -12, 16, -12, 32);
                        var e = this.properties["W/L"];
                        this.properties.name ? (this.draw_text(t, this.properties.name, 2, 22, 6, 5),
                        this.draw_text(t, e, 2, 26, 0, 5)) : this.draw_text(t, e, 2, 24, 3, 5)
                    }
                    ,
                    ot.prototype.clone = function(t, e) {
                        return new ot(t,e,this.rotation,this.properties.name,this.properties["W/L"])
                    }
                    ,
                    nt.prototype = new J,
                    nt.prototype.constructor = nt,
                    nt.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<PFet {W_L} ({x},{y})>", {
                            W_L: this.properties["W/L"],
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    nt.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 0, 0, 0, 16),
                        this.draw_line(t, -8, 16, 0, 16),
                        this.draw_line(t, -8, 16, -8, 32),
                        this.draw_line(t, -8, 32, 0, 32),
                        this.draw_line(t, 0, 32, 0, 48),
                        this.draw_line(t, -24, 24, -16, 24),
                        this.draw_circle(t, -14, 24, 2, !1),
                        this.draw_line(t, -12, 16, -12, 32);
                        var e = this.properties["W/L"];
                        this.properties.name ? (this.draw_text(t, this.properties.name, 2, 22, 6, 5),
                        this.draw_text(t, e, 2, 26, 0, 5)) : this.draw_text(t, e, 2, 24, 3, 5)
                    }
                    ,
                    nt.prototype.clone = function(t, e) {
                        return new nt(t,e,this.rotation,this.properties.name,this.properties["W/L"])
                    }
                    ,
                    st.prototype = new J,
                    st.prototype.constructor = st,
                    st.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<OpAmp{A} ({x},{y})>", {
                            A: this.properties.A,
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    st.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 8, -8, 8, 24),
                        this.draw_line(t, 8, -8, 40, 8),
                        this.draw_line(t, 8, 24, 40, 8),
                        this.draw_line(t, 0, 0, 8, 0),
                        this.draw_line(t, 0, 16, 8, 16),
                        this.draw_text(t, "gnd", 37, 18, 5),
                        this.draw_line(t, 40, 8, 48, 8),
                        this.draw_line(t, 24, 16, 24, 32),
                        this.draw_line(t, 10, 0, 16, 0),
                        this.draw_line(t, 13, -3, 13, 3),
                        this.draw_line(t, 10, 16, 16, 16),
                        this.properties.name && this.draw_text(t, this.properties.name, 32, 16, 0, 5)
                    }
                    ,
                    st.prototype.clone = function(t, e) {
                        return new st(t,e,this.rotation,this.properties.name,this.properties.A)
                    }
                    ,
                    rt.prototype = new J,
                    rt.prototype.constructor = rt,
                    rt.prototype.toString = function() {
                        return edx.StringUtils.interpolate("<{type}source {params} ({x},{y})>", {
                            type: this.type,
                            params: this.properties.params,
                            x: this.x,
                            y: this.y
                        })
                    }
                    ,
                    rt.prototype.draw = function(t) {
                        J.prototype.draw.call(this, t),
                        this.draw_line(t, 0, 0, 0, 12),
                        this.draw_circle(t, 0, 24, 12, !1),
                        this.draw_line(t, 0, 36, 0, 48),
                        "v" == this.type ? (this.draw_line(t, 0, 15, 0, 21),
                        this.draw_line(t, -3, 18, 3, 18),
                        this.draw_line(t, -3, 30, 3, 30)) : "i" == this.type && (this.draw_line(t, 0, 15, 0, 32),
                        this.draw_line(t, -3, 26, 0, 32),
                        this.draw_line(t, 3, 26, 0, 32)),
                        this.properties.name && this.draw_text(t, this.properties.name, -13, 24, 5, 5),
                        this.properties.value && this.draw_text(t, this.properties.value, 13, 24, 3, 5)
                    }
                    ;
                    var Ht = {
                        dc: ["DC value"],
                        impulse: ["Height", "Width (secs)"],
                        step: ["Initial value", "Plateau value", "Delay until step (secs)", "Rise time (secs)"],
                        square: ["Initial value", "Plateau value", "Frequency (Hz)", "Duty cycle (%)"],
                        triangle: ["Initial value", "Plateau value", "Frequency (Hz)"],
                        pwl: ["Comma-separated list of alternating times and values"],
                        pwl_repeating: ["Comma-separated list of alternating times and values"],
                        pulse: ["Initial value", "Plateau value", "Delay until pulse (secs)", "Time for first transition (secs)", "Time for second transition (secs)", "Pulse width (secs)", "Period (secs)"],
                        sin: ["Offset value", "Amplitude", "Frequency (Hz)", "Delay until sin starts (secs)", "Phase offset (degrees)"]
                    };
                    return rt.prototype.build_content = function(t) {
                        var e = [];
                        if (e.name = g("text", 10, this.properties.name),
                        void 0 == t)
                            e.value = this.properties.value;
                        else {
                            var i = [];
                            for (var o in Ht)
                                i.push(o);
                            var n = y(i, t.fun);
                            if (n.component = this,
                            n.addEventListener("change", at, !1),
                            e.type = n,
                            "pwl" == t.fun || "pwl_repeating" == t.run) {
                                for (var s = "", r = !0, a = 0; a < t.args.length; a++)
                                    r ? r = !1 : s += ",",
                                    s += B(t.args[a], 3),
                                    a % 2 == 0 && (s += "s");
                                e[Ht[t.fun][0]] = g("text", 30, s)
                            } else
                                for (var h = Ht[t.fun], a = 0; a < h.length; a++) {
                                    var s = B(t.args[a], 3);
                                    e[h[a]] = g("text", 10, s)
                                }
                        }
                        var l = this.content;
                        return l.hasChildNodes() && l.removeChild(l.firstChild),
                        l.appendChild(m(e)),
                        l.fields = e,
                        l.component = this,
                        l
                    }
                    ,
                    rt.prototype.edit_properties = function(t, e) {
                        if (this.near(t, e)) {
                            this.src = void 0,
                            void 0 !== n && (this.src = n.parse_source(this.properties.value));
                            var i = this.build_content(this.src);
                            return this.sch.dialog("Edit Properties", i, function(t) {
                                var e = t.component
                                  , i = t.fields
                                  , o = !0
                                  , n = "";
                                for (var s in i)
                                    if ("name" == s)
                                        e.properties.name = i.name.value;
                                    else {
                                        if ("value" == s)
                                            return n = i.value.value,
                                            void e.sch.redraw_background();
                                        if ("type" == s) {
                                            var r = i.type;
                                            n = r.options[r.selectedIndex].value + "("
                                        } else
                                            o ? o = !1 : n += ",",
                                            n += i[s].value
                                    }
                                e.properties.value = n + ")",
                                e.sch.redraw_background()
                            }),
                            !0
                        }
                        return !1
                    }
                    ,
                    ht.prototype = new J,
                    ht.prototype.constructor = ht,
                    ht.prototype.toString = rt.prototype.toString,
                    ht.prototype.draw = rt.prototype.draw,
                    ht.prototype.clone = rt.prototype.clone,
                    ht.prototype.build_content = rt.prototype.build_content,
                    ht.prototype.edit_properties = rt.prototype.edit_properties,
                    ht.prototype.display_current = function(t, e) {
                        var i = this.properties.name
                          , o = "I(" + (i || "_" + this.properties._json_) + ")"
                          , n = e[o];
                        if (void 0 != n) {
                            t.globalAlpha = .5,
                            this.draw_text(t, "███", -8, 8, 4, 6, dt),
                            t.globalAlpha = 1;
                            var s = B(n, 2) + "A";
                            this.draw_text(t, s, -3, 5, 5, 6, "rgb(255,64,64)"),
                            this.draw_line(t, -3, 4, 0, 8),
                            this.draw_line(t, 3, 4, 0, 8),
                            delete e[o]
                        }
                    }
                    ,
                    ht.prototype.clone = function(t, e) {
                        return new ht(t,e,this.rotation,this.properties.name,this.properties.value)
                    }
                    ,
                    lt.prototype = new J,
                    lt.prototype.constructor = lt,
                    lt.prototype.toString = rt.prototype.toString,
                    lt.prototype.draw = rt.prototype.draw,
                    lt.prototype.clone = rt.prototype.clone,
                    lt.prototype.build_content = rt.prototype.build_content,
                    lt.prototype.edit_properties = rt.prototype.edit_properties,
                    lt.prototype.clone = function(t, e) {
                        return new lt(t,e,this.rotation,this.properties.name,this.properties.value)
                    }
                    ,
                    {
                        Schematic: i,
                        component_slider: ct
                    }
                }()
            }
            ).call(window)
        }
        ).call(e, i(0), i("./node_modules/edx-ui-toolkit/src/js/utils/html-utils.js"))
    },
    11: function(t, e, i) {
        i("./common/static/xmodule/modules/js/000-58032517f54c5c1a704a908d850cbe64.js"),
        i("./common/static/xmodule/modules/js/001-3918b2d4f383c04fed8227cc9f523d6e.js"),
        i("./common/static/xmodule/modules/js/002-662f9ad0116845f260dd2d6a4b4f3c78.js"),
        i("./common/static/xmodule/modules/js/003-b3206f2283964743c4772b9d72c67d64.js"),
        i("./common/static/xmodule/modules/js/004-b0c34afa95eaa6b45d843d92ca523a94.js"),
        t.exports = i("./common/static/xmodule/modules/js/005-fc8bd2dc5b96b86d1abefdd417dd8ba5.js")
    }
}, [11]));
