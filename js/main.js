function startApp()
{
    showPersonalInfoView()

    //bind navigation menu links
    $('#linkMenuPersonalInfo').click(showPersonalInfoView)
    $('#linkMenuWorkExperience').click(showWorkExperienceView)
    $('#linkMenuEducation').click(showEducationView)
    $('#linkMenuPersonalSkills').click(showPersonalSkillsView)
    $('#linkMenuCVWebSiteButton').click(showPersonalInfoView)

    //buttons click
    //personal info view
    $('#personalInfoShowMoreButton').click(personalInfoShowHiddenSection)
    $('#personalInfoHideButton').click(personalInfoHideHiddenSection)

    //work experience view
    $('#showHiddenSectionNastechButton').click(showHiddenSectionNastech)
    $('#hideHiddenSectionNastechButton').click(hideHiddenSectionNastech)

    $('#showHiddenSectionCafeMilanoButton').click(showHiddenSectionCafeMilano)
    $('#hideHiddenSectionCafeMilanoButton').click(hideHiddenSectionCafeMilano)


    $('#showHiddenSectionBeachBarAmourButton').click(showHiddenSectionBeachBarAmour)
    $('#hideHiddenSectionBeachBarAmourButton').click(hideHiddenSectionBeachBarAmour)

    function showView(viewName)
    {
        $('main > div').hide()
        $('#' + viewName).show()
    }

    function showPersonalInfoView()
    {
        personalInfoHideHiddenSection()
        showView('viewPersonalInfo')
    }

    function showWorkExperienceView()
    {
        showView('viewWorkExperience')
        hideHiddenSectionNastech()
        hideHiddenSectionCafeMilano()
        hideHiddenSectionBeachBarAmour()
    }

    function showEducationView()
    {
        showView('viewEducation')
    }

    function showPersonalSkillsView()
    {
        showView('viewPersonalSkills')
    }

    function personalInfoShowHiddenSection()
    {
        $('#personalInfoShowMoreButton').hide()
        $('#personalInfoHiddenSection').show()
    }

    function personalInfoHideHiddenSection()
    {
        $('#personalInfoShowMoreButton').show()
        $('#personalInfoHiddenSection').hide();
    }

    function showHiddenSectionNastech()
    {
        $('#hiddenSectionNashtech').show()
        $('#showHiddenSectionNastechButton').hide()
    }

    function hideHiddenSectionNastech()
    {
        $('#hiddenSectionNashtech').hide();
        $('#showHiddenSectionNastechButton').show()
    }

    function showHiddenSectionCafeMilano(){
        $('#hiddenSectionCafeMilano').show()
        $('#showHiddenSectionCafeMilanoButton').hide()
    }

    function hideHiddenSectionCafeMilano(){
        $('#hiddenSectionCafeMilano').hide()
        $('#showHiddenSectionCafeMilanoButton').show()
    }

    function showHiddenSectionBeachBarAmour(){
        $('#hiddenSectionBeachBarAmour').show()
        $('#showHiddenSectionBeachBarAmourButton').hide()
    }

    function hideHiddenSectionBeachBarAmour(){
        $('#hiddenSectionBeachBarAmour').hide()
        $('#showHiddenSectionBeachBarAmourButton').show()
    }
}